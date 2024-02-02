import React, {useState} from "react";
import {Breadcrumb, Table, Button, Dropdown, Label, Select} from 'flowbite-react';
import {Revision, RevisionHistory} from "./revisionHistory.ts";
import {HiChevronDown, HiChevronLeft, HiChevronRight} from 'react-icons/hi';

export const RevisionHistoryPage: () => React.ReactElement = () => {
  return (
    <div className={"container mx-auto"}>
      <header className={"mb-8"}>
        <Breadcrumb className={"my-8"}>
          <Breadcrumb.Item href={"https://www.yext.com/s/3744518/search2/experiences"}>
            Search
          </Breadcrumb.Item>
          <Breadcrumb.Item
            href={"https://www.yext.com/s/3744518/search2/experiences/default/verticals"}>
            Default Experience
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Revision History
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1
          className={"mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"}>Revision
          History</h1>
        <p>Use this page to see all revisions of your search configuration and assign your latest and production
          labels to a specific revision.</p>
      </header>
      <RevisionHistoryTable/>
    </div>
  );
}

export const RevisionHistoryTable = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  return (
    <div className={"overflow-x-auto"}>
      <div className={"flex flex-row justify-end mb-2 content-baseline"}>
        <div className={"flex flex-row mx-2 items-baseline"}>
          <Label htmlFor={"changeLimit"} className={"me-2"}>Show</Label>
          <Select id={"changeLimit"} value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
          </Select>
        </div>
        <Button.Group>
          <Button color={"light"} disabled={offset === 0} aria-label={"previous"} onClick={() => {
            setOffset(Math.max(offset - limit, 0))
          }}><HiChevronLeft/></Button>
          <Button color={"light"} disabled={offset + limit >= RevisionHistory.length} aria-label={"next"}
                  onClick={() => {
                    setOffset(offset + limit)
                  }}><HiChevronRight/></Button>
        </Button.Group>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Version Number</Table.HeadCell>
          <Table.HeadCell>Timestamp</Table.HeadCell>
          <Table.HeadCell>Updated By</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <RevisionHistoryRows offset={offset} limit={limit}/>
        </Table.Body>
      </Table>
    </div>
  )
}


export const RevisionHistoryRows: React.FC<{
  offset: number,
  limit: number,
}> = ({offset, limit}) => {
  const revisions = RevisionHistory.slice(offset, offset + limit);
  return (
    <>
      {revisions.map(revision => <RevisionHistoryTableRow key={revision.id} revision={revision}/>)}
    </>
  )
}

export const RevisionHistoryTableRow: React.FC<{ revision: Revision }> = ({revision}) => {
  return (
    <Table.Row>
      <Table.Cell><RevisionLabel revision={revision}/></Table.Cell>
      <Table.Cell>{revision.timestamp}</Table.Cell>
      <Table.Cell>{revision.updatedBy}</Table.Cell>
      <Table.Cell><ActionMenu revision={revision}/></Table.Cell>
    </Table.Row>
  )
}

export const RevisionLabel: React.FC<{ revision: Revision }> = ({revision}) => {

  if (revision.label) {
    const colorScheme = revision.label.toLowerCase() === "production" ? "green" : "red";
    return (
      <div className={"flex flex-row items-baseline"}>
        <span className={"me-2"}>{revision.id}</span>
        <span
          className={`bg-${colorScheme}-100 text-${colorScheme}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${colorScheme}-900 dark:text-${colorScheme}-300`}>
          {revision.label}
        </span>
      </div>
    )
  }

  return (
    <>{revision.id}</>
  );
}

export const ActionMenu: React.FC<{ revision: Revision }> = ({revision}) => {
  return (
    <Button.Group>
      <Button as={"a"} color={"dark"}
              href={`https://www.yext.com/s/3744518/search2/experiences/default/revisionHistory/${revision.id}`}
              target={"_blank"}>View JSON</Button>
      <Dropdown
        color={"dark"}
        label={""}
        aria-label={"More Options"}
        renderTrigger={
          () => <Button color={"dark"} className={"rounded-l-none"}><HiChevronDown/></Button>
        }>
        <Dropdown.Item>Publish to Production</Dropdown.Item>
        <Dropdown.Item>Restore to Latest</Dropdown.Item>
      </Dropdown>
    </Button.Group>
  )
}