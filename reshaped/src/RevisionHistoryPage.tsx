import {
  ActionBar,
  Badge, Breadcrumbs,
  Button, Container,
  DropdownMenu,
  HiddenVisually,
  Select,
  Table, Text,
  View
} from "reshaped";
import IconChevronDown from "reshaped/icons/ChevronDown";
import IconChevronLeft from "reshaped/icons/ChevronLeft";
import IconChevronRight from "reshaped/icons/ChevronRight";
import {Revision, RevisionHistory} from "./revisionHistory.ts";
import React, {useState} from "react";


export const RevisionHistoryPage = () => {
  return (
    <View padding={4}>
      <Container>
        <View align={"start"} paddingBottom={16}>
          <View paddingBottom={4}>
            <Breadcrumbs>
              <Breadcrumbs.Item href={"https://www.yext.com/s/3744518/search2/experiences"}>Search</Breadcrumbs.Item>
              <Breadcrumbs.Item href={"https://www.yext.com/s/3744518/search2/experiences/default"}>test</Breadcrumbs.Item>
              <Breadcrumbs.Item>Revision History</Breadcrumbs.Item>
            </Breadcrumbs>
          </View>
          <View paddingBottom={4}>
            <Text variant={"title-5"} as={"h1"}>Revision History</Text>
          </View>
          <Text>
            Use this page to see all revisions of your search configuration and assign your latest and production labels to a specific revision.
          </Text>
        </View>
        <RevisionHistoryTable/>
      </Container>
    </View>
  )
}

export const RevisionHistoryTable = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  return (
    <>
      <ActionBar paddingBlock={0} paddingInline={0}>
        <View direction={"row"} align={"stretch"} justify={"end"} gap={2} padding={2}>
          <View.Item>
            <View direction={"row"} gap={2} align={"baseline"} padding={0}>
              Show <Select name={"limit"}
                           onChange={({value}) => setLimit(parseInt(value))}
                           options={[
                             {value: "5", label: "5"},
                              {value: "10", label: "10"},
                           ]}
            />
            </View>
          </View.Item>
          <View.Item>
            <View align={"baseline"} gap={0} direction={"row"}>
              <Button icon={IconChevronLeft} onClick={() => setOffset(offset - limit)} disabled={offset === 0}>
                <HiddenVisually>Previous</HiddenVisually>
              </Button>
              <Button icon={IconChevronRight} onClick={() => setOffset(offset + limit)} disabled={offset + limit >= RevisionHistory.length}>
                <HiddenVisually>Next</HiddenVisually>
              </Button>
            </View>
          </View.Item>
        </View>
      </ActionBar>
      <Table>
        <Table.Head>
          <Table.Row highlighted={true}>
            <Table.Heading>
              Version Number
            </Table.Heading>
            <Table.Heading>
              Timestamp
            </Table.Heading>
            <Table.Heading>
              Updated By
            </Table.Heading>
            <Table.Heading>
              Actions
            </Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <RevisionHistoryRows revisions={RevisionHistory} offset={offset} limit={limit}/>
        </Table.Body>
      </Table>
    </>
  );
}
export const RevisionHistoryRows: (props: {
  revisions: Revision[],
  offset: number,
  limit: number,
}) => React.ReactElement = ({
                              revisions,
                              offset,
                              limit,
                            }) => {
  const limitedRevisions = revisions.slice(offset, offset + limit);
  return (
    <>
      {limitedRevisions.map(revision => <RevisionHistoryTableRow key={revision.id} revision={revision}/>)}
    </>
  );
}
export const RevisionHistoryTableRow: (props: { revision: Revision }) => React.ReactElement = ({revision}) => {
  return (
    <Table.Row>
      <Table.Heading attributes={{scope: "row"}}>
        <View direction={"row"}>
          {revision.id}
          <RevisionLabel revision={revision}/>
        </View>
      </Table.Heading>
      <Table.Cell>
        {revision.timestamp}
      </Table.Cell>
      <Table.Cell>
        {revision.updatedBy}
      </Table.Cell>
      <Table.Cell>
        <CustomDropDown revision={revision}/>
      </Table.Cell>
    </Table.Row>
  );
}

const RevisionLabel = ({revision}: { revision: Revision }) => {
  if (!revision.label) {
    return null;
  }
  const color = revision.label.toLowerCase() === "production" ? "critical" : "positive";
  return <View.Item gapBefore={2}><Badge color={color}>{revision.label}</Badge></View.Item>
}

const CustomDropDown = (props: { revision: Revision }) => {
  return <DropdownMenu>
    <DropdownMenu.Trigger>
      {(attributes) => {
        return (
          <View direction={"row"} gap={0} align={"center"}>
            <Button
              href={`https://www.yext.com/s/3744518/search2/experiences/default/revisionHistory/${props.revision.id}`}>
              View JSON
            </Button>
            <Button icon={IconChevronDown} attributes={attributes}><HiddenVisually>Open</HiddenVisually></Button>
          </View>
        );
      }}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item>
        Publish to Production
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        Restore to Latest
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
}