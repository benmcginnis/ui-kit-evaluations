import React, {useState} from "react";
import {Revision, RevisionHistory} from "./revisionHistory";
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Text,
  HStack,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Flex,
  Select,
  Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading
} from '@chakra-ui/react'

import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

export const RevisionHistoryPage = () => {
  return (
    <Container w={"full"} maxW={"container.lg"} p={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href={"https://www.yext.com/s/3744518/search2/experiences"}>Search</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={"https://www.yext.com/s/3744518/search2/experiences/default/verticals"}>
            Default Experience
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            Revision History
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Stack align={"start"} gap={4} mb={4}>
        <Heading as="h1" size={"2xl"}> Revision History</Heading>
        <Text>Use this page to see all revisions of your search configuration and assign your latest and production
          labels to a specific revision.</Text>
      </Stack>
      <RevisionHistoryTable/>
    </Container>
  )
}

export const RevisionHistoryTable = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  return (
    <>
      <Flex align={"baseline"} grow={1} gap={2} justify={"end"}>
        <Flex width={"120px"} align={"baseline"} gap={2} justify={"end"}>
          Show {' '}
          <Select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLimit(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
          </Select>
        </Flex>
        <ButtonGroup isAttached>
          <Button
            as={IconButton}
            icon={<ChevronLeftIcon/>}
            onClick={() => setOffset(Math.max(offset - limit, 0))}
            disabled={offset === 0}>
            Previous
          </Button>
          <Button
            as={IconButton}
            icon={<ChevronRightIcon/>}
            onClick={() => setOffset(Math.min(offset + limit, RevisionHistory.length))}
            disabled={offset + limit >= RevisionHistory.length}>
            Next
          </Button>
        </ButtonGroup>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Version Number</Th>
            <Th>Timestamp</Th>
            <Th>Updated By</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <RevisionHistoryRows revisions={RevisionHistory} offset={offset} limit={limit}/>
        </Tbody>
      </Table>
    </>
  );
}

export const RevisionHistoryRows: React.FC<{
  revisions: Revision[],
  offset: number,
  limit: number,
}> = ({revisions, offset, limit}) => {
  const limitedRevisions = revisions.slice(offset, offset + limit);
  return (
    <>
      {limitedRevisions.map(revision => <RevisionHistoryTableRow key={revision.id} revision={revision}/>)}
    </>
  );
}

export const RevisionHistoryTableRow: React.FC<{ revision: Revision }> = ({revision}) => {
  return (
    <Tr>
      <Th scope="row"><RevisionLabel revision={revision}/></Th>
      <Td>{revision.timestamp}</Td>
      <Td>{revision.updatedBy}</Td>
      <Td><ActionMenu revision={revision}/></Td>
    </Tr>
  );
}

export const RevisionLabel: React.FC<{ revision: Revision }> = ({revision}) => {
  if (revision.label) {
    const scheme = revision.label.toLowerCase() === "production" ? "green" : "red";

    return (
      <HStack spacing={"1ch"}>
        <Text>
          {revision.id}
        </Text>
        <Badge
          colorScheme={scheme}>
          {revision.label}
        </Badge>
      </HStack>
    );
  }

  return (
    <>{revision.id}</>
  );
}

export const ActionMenu: React.FC<{ revision: Revision }> = ({revision}) => {
  return (
    <ButtonGroup isAttached>
      <Button
        as="a"
        borderRightRadius={0}
        target="_blank"
        href={`https://www.yext.com/s/3744518/search2/experiences/default/revisionHistory/${revision.id}`}
      >
        View JSON
      </Button>
      <Menu>
        <MenuButton
          borderLeftRadius={0}
          as={IconButton}
          aria-label="Options"
          icon={<ChevronDownIcon/>}
        />
        <MenuList>
          <MenuItem>
            Publish to Production
          </MenuItem>
          <MenuItem>
            Restore to Latest
          </MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
}
