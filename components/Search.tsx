import React from "react"
import CustomClearFilters from "./CustomClearFilters"
import CustomRefinementList from "./CustomRefinementList"
import CustomPagination from "./CustomPagination"
import CustomConfigure from "./Configure"
import styles from "../styles/Home.module.css"
import { Badge, Card, Grid, Text } from "@nextui-org/react"

import {
  InstantSearch,
  SearchBox,
  connectHits,
  connectStateResults,
} from "react-instantsearch-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLink
} from "@fortawesome/free-solid-svg-icons"
import { TagInputType } from "../generated/graphql-frontend"
import Link from "next/link"
const CustomHits = ({ hits }: { hits: any }) => (
  <div
    style={{
      position: "absolute",
      boxShadow: "2px 5px 20px -5px rgba(0,0,0,.3)",
      backgroundColor: "#fff",
      borderRadius: "8px",
      width: "100%",
      padding: "20px",
      overflow: "scroll",
      maxHeight: "1000px",
    }}
  >
    {hits.map((hit: any) => (
      <Card css={{ mb: 10 }} key={hit.objectID} variant={"bordered"}>
        <Card.Body>
          <div style={{ display:'flex' }}><Text h4>{hit.title}</Text><Link href={"/consultancies/"+hit.id}> <FontAwesomeIcon
   style={{ width: "24px", height: "24px", marginLeft: '12px' }}
   color="#111"
   icon={faLink}
 /></Link></div>
          <Text h6>{hit.short_description}</Text>
          <div dangerouslySetInnerHTML={{ __html: hit.long_description|| '' }}></div>
        </Card.Body>
        <Card.Footer>
          <div>
            {hit?.tags &&
              hit?.tags?.map((tag: TagInputType) => {
                return (
                  <Badge
                    key={tag.id}
                    css={{
                      bg: "$accents4",
                      color: "$accents8",
                      border: "none",
                      mr: 4,
                      mt: 4,
                    }}
                  >
                    {tag.name}
                  </Badge>
                )
              })}
          </div>
        </Card.Footer>
      </Card>
    ))}
  </div>
)

const Hits = connectHits(CustomHits)

const SearchResult = ({
  searchState,
  searchResults,
}: {
  searchState: any
  searchResults: any
}) => {
  if (searchState && searchState.query && searchState.query.length > 0) {
    return <Hits />
  }
  return null
}

const ConnectedSearchResult = connectStateResults(SearchResult)
function Search() {
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <div className="right-panel">
        <SearchBox className={styles.roundBox} />
        <ConnectedSearchResult></ConnectedSearchResult>
      </div>
    </div>
  )
}

export default Search
