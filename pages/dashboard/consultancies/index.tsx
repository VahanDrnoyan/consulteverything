
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Text, Button, Table, Row, Col, Tooltip, User, Pagination, Badge } from "@nextui-org/react";
import router from "next/router";
import { NextPage } from "next/types";
import { StyledBadge } from "../../../components/icons/StyledBadge";
import { IconButton } from "../../../components/icons/IconButton";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { EditIcon } from "../../../components/icons/EditIcon";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import { Key, useEffect, useState } from "react";
import { Consultancy, GetMyConsultanciesQuery, Tag, useGetMyConsultanciesQuery, useTotalConsultanciesQuery } from "../../../generated/graphql-frontend";


type NextPageWithAuth = NextPage & {
  auth?: {
    role: string
  }
};
type Users = {
  id: number,
  name: string,
  role: string,
  team: string,
  status: string,
  age: string,
  avatar: string,
  email: string,
}
type Column = {
  name: string,
  uid: string
}

const Consultancies: NextPageWithAuth = (props) => {
  const navigateToEdit = () => {
    router.push('/dashboard/edit')
  }
  const limit = 4
const[offset, setOffset] = useState(0)
const { loading: loadingTotal, data: dataTotal } = useTotalConsultanciesQuery()
  const { loading, data, fetchMore } = useGetMyConsultanciesQuery({
    variables: {
      offset: offset,
      limit: limit
    },
  });
  useEffect(()=> {
    fetchMore({
      variables: {
        offset: offset
      }
    }).then((res)=>console.log(res))
  }, [offset])
  console.log(data?.getMyConsultancies, 5555)
  const columns: Column[] = [
    { name: "TITLE", uid: "title" },
    { name: "CREATED AT", uid: "created_at" },
    { name: "DESCRIPTION", uid: "short_description" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const renderCell = (item: any, columnKey: Key) => {
    if(item){
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "title":
        return (
        <><Text h4>{cellValue}</Text><Text b size={14} css={{ tt: "capitalize" }}>{item.isActive? (<Badge size="sm" color={"success"}>Active</Badge>): (<Badge color={"default"} size="sm">Inactive</Badge>)}</Text></>

        );
      case "created_at":
        return (
          <Col>
            <Row>
            <Text h6>{cellValue}</Text>
                          </Row>
            <Row css={{d: 'flex', alignItems: 'center'}}><Text h6 css={{d: 'inline', m: 0}}>Tags:</Text>
              {item.tags.map((tag: Tag, i: number)=>{
                  return <Badge color={'default'} isSquared size={"xs"} key={tag.name + '_' + i} >{tag.name}</Badge>
              })}
            </Row>
          </Col>
        );
      case "short_description":
        return  <Text h6>{cellValue}</Text>

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <Button color={"success"} css={{p: 4, height: 'auto', borderRadius: 4}} auto onClick={() => console.log("View user", item.id)}>
                  <EyeIcon size={20} fill="#fff" />
                </Button>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <Button auto color={"default"} css={{p: 4, height: 'auto', borderRadius: 4}} onClick={() => console.log("Edit user", item.id)}>
                  <EditIcon size={20} fill="#fff" />
                </Button>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", item.id)}
              >
                <Button auto css={{p: 4, height: 'auto', borderRadius: 4}} color={"error"}>
                  <DeleteIcon size={20} fill="#fff" />
                </Button>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  }
  };

  return (<div><Container>
    <Grid.Container gap={2} css={{ justifyContent: 'space-between' }}>
      <Grid>
        <Text h2>My Consultancies</Text>
      </Grid>
      <Grid css={{ alignItems: 'center', d: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={navigateToEdit} color="gradient" css={{ 'bg': '$accents7' }} auto icon={<FontAwesomeIcon size={"xl"} color="#fff)" icon={faAdd} />}>
          Create new Consultancy
        </Button>
      </Grid>
    </Grid.Container>
    {!loading && (

      <><Table
      compact
        aria-label="My consultancies"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={data?.getMyConsultancies || []}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell css={{borderBottom: '1px solid $accents1'}}>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
       
      </Table>
      <div style={{marginTop: '25px', textAlign: 'center'}}>
      <Pagination total={dataTotal && dataTotal.totalConsultancies && dataTotal.totalConsultancies.total ? Math.floor(dataTotal?.totalConsultancies?.total / limit + 1): 0} initialPage={1} onChange={(page)=> {
        setOffset(page * limit - limit)
        
      }}/>
      </div>
      </>

    )}


  </Container>
  </div>
  )
}
Consultancies.auth = {
  role: 'USER'
}
export default Consultancies
