
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Text, Button, Table, Row, Col, Tooltip, User, Pagination, Badge, Loading } from "@nextui-org/react";
import router from "next/router";
import { GetServerSideProps, NextPage } from "next/types";
import { StyledBadge } from "../../../components/icons/StyledBadge";
import { IconButton } from "../../../components/icons/IconButton";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { EditIcon } from "../../../components/icons/EditIcon";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import { Key, useEffect, useState } from "react";
import { Consultancy, GetMyConsultanciesDocument, GetMyConsultanciesQuery, GetMyConsultanciesQueryVariables, Tag, TotalConsultanciesDocument, TotalConsultanciesQuery, TotalConsultanciesQueryVariables, useDeleteConsultancyMutation, useGetMyConsultanciesQuery, useTotalConsultanciesQuery } from "../../../generated/graphql-frontend";
import { initializeApollo } from "../../../lib/client";
import { InferGetServerSidePropsType } from "next";
import LastSeen from "../../../components/LastSeen";
import { Reference } from "@apollo/client";

export type NextPageWithAuth = NextPage & {
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

const Consultancies: NextPageWithAuth = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const navigateToEdit = () => {
    router.push('/dashboard/edit')
  }
  const [deleteErrors, setDeleteErrors] = useState<string>('')
  const limit = 10
  const [offset, setOffset] = useState(0)
  const { loading: loadingTotal, data: dataTotal, refetch: refetchTotal } = useTotalConsultanciesQuery()
  const { loading, data, fetchMore } = useGetMyConsultanciesQuery({
    variables: {
      offset: offset,
      limit: limit
    },
  });
  useEffect(() => {
    fetchMore({
      variables: {
        offset: offset
      }
    }).then((res) => console.log(res))
  }, [fetchMore, offset])

  const columns: Column[] = [
    { name: "TITLE", uid: "title" },
    { name: "CREATED AT/TAGS", uid: "created_at" },
    { name: "DESCRIPTION", uid: "short_description" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const [deleteConsultancy, { loading: deleteLoading, error: deleteError }] = useDeleteConsultancyMutation({
    onCompleted: (data) => {
      refetchTotal().then(() => {
        fetchMore({
          variables: {
            offset: offset
          }
        })
      })


    },
  });
  useEffect(() => {
   if(deleteError){
      setDeleteErrors(deleteError?.message);
  
    const timeout = window.setTimeout(() => {
      setDeleteErrors('');
    }, 3000)

    return () => {
      window.clearTimeout(timeout);
    };
  }
  }, [deleteError])
  const renderCell = (item: any, columnKey: Key) => {
    if (item) {
      const cellValue = item[columnKey];
      switch (columnKey) {
        case "title":
          return (
            <><Text h4>{cellValue}</Text><Text b size={14} css={{ tt: "capitalize" }}>{item.isActive ? (<Badge size="sm" color={"success"}>Active</Badge>) : (<Badge color={"default"} size="sm">Inactive</Badge>)}</Text></>

          );
        case "created_at":
          return (
            <Col>
              <Row>
                <LastSeen date={new Date(item.created_at).getTime()} />
              </Row>
              <Row css={{ d: 'flex', alignItems: 'center' }}><Text h6 css={{ d: 'inline', m: 0 }}>Tags:</Text>
                {item.tags.map((tag: Tag, i: number) => {
                  return <Badge color={'default'} isSquared size={"xs"} key={tag.name + '_' + i} >{tag.name}</Badge>
                })}
              </Row>
            </Col>
          );
        case "short_description":
          return <Text h6>{cellValue}</Text>

        case "actions":
          return (
            <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Tooltip content="Details">
                  <Button color={"success"} css={{ p: 4, height: 'auto', borderRadius: 4 }} auto onClick={() => console.log("View user", item.id)}>
                    <EyeIcon size={20} fill="#fff" />
                  </Button>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip content="Edit user">
                  <Button auto color={"default"} css={{ p: 4, height: 'auto', borderRadius: 4 }} onClick={() => {
                    router.push({
                      pathname: '/dashboard/edit/'+ item.id,
                    
                    })
                  }}>
                    <EditIcon size={20} fill="#fff" />
                  </Button>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip
                  content="Delete"
                  color="error"

                >
                  <Button auto css={{ p: 4, height: 'auto', borderRadius: 4 }} color={"error"}
                    onClick={() => {
                      deleteConsultancy({
                        variables: {
                          id: item.id
                        },
                        errorPolicy: 'all',
                        update: (cache, result) => {
                          const deleteConsultancy = result.data?.deleteConsultancy;

                          if (deleteConsultancy) {
                            cache.modify({
                              fields: {
                                getMyConsultancies(consultancyRefs: Reference[], { readField }) {
                                  return consultancyRefs.filter((consultancyRef) => {
                                    return readField('id', consultancyRef) !== deleteConsultancy.id;
                                  });
                                },
                              },
                            });
                          }
                        },
                      }).catch(() => { })
                    }}
                  >
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

  return (<Container>
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
    {deleteErrors && (<Text css={{ color: '$red600', fontSize: 12, mt: 6, textAlign: 'center' }}>{deleteErrors}</Text>)}

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
                <Table.Cell css={{ borderBottom: '1px solid $accents1' }}>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>

      </Table>
      {dataTotal?.totalConsultancies?.total && dataTotal?.totalConsultancies?.total > limit ? (
        <div style={{ marginTop: '25px', textAlign: 'center' }}>
          <Pagination total={dataTotal?.totalConsultancies?.total ? Math.floor(dataTotal?.totalConsultancies?.total / limit) : 0} initialPage={1} onChange={(page) => {
            setOffset(page * limit - limit)

          }} />
        </div>

      ): ''}
        
      </>

    ) || (<div style={{ textAlign: 'center', marginTop: '100px' }}> <Loading type="spinner" size="lg" /></div>)}


  </Container>
  )
}
Consultancies.auth = {
  role: 'USER'
}
// export const getServerSideProps: GetServerSideProps = async (context) => {
  // const id =
    // typeof context.params?.id === 'string'
      // ? parseInt(context.params.id, 10)
      // : NaN;
  // 
    // const apolloClient = initializeApollo();
    // await apolloClient.query<GetMyConsultanciesQuery, GetMyConsultanciesQueryVariables>({
      // query: GetMyConsultanciesDocument,
      // variables: { offset: 0, limit: 4 },
    // });
    // await apolloClient.query<TotalConsultanciesQuery, TotalConsultanciesQueryVariables>({
      // query: TotalConsultanciesDocument,
      // variables: {},
    // });
    // return { props: { initialApolloState: apolloClient.cache.extract() } };
// };
export default Consultancies
