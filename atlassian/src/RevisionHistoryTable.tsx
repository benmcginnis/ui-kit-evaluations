import Lozenge from "@atlaskit/lozenge";
import React from 'react';
import DynamicTable from '@atlaskit/dynamic-table';

import {Revision, RevisionHistory} from "./revisionHistory.ts";
import { Flex } from '@atlaskit/primitives';

import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from '@atlaskit/dropdown-menu';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';

import Button, { IconButton, SplitButton } from '@atlaskit/button/new';

const head = {
  cells: [
    {
      key: 'version-number',
      content: 'Version Number',
    },
    {
      key: 'timestamp',
      content: 'Timestamp',
    },
    {
      key: 'updated-by',
      content: 'Updated By',
    },
    {
      key: 'actions',
      content: 'Actions',
    },
  ],
}

const rows = RevisionHistory.map(revision => ({
  key: `row-${revision.id}`,
  cells: [
    {
      key: `cell-${revision.id}`,
      content: (
        <RevisionLabel revision={revision} />
      ),
    },
    {
      key: `cell-${revision.timestamp}`,
      content: revision.timestamp,
    },
    {
      key: `cell-${revision.updatedBy}`,
      content: revision.updatedBy,
    },
    {
      key: `cell-actions`,
      content: (
        <RevisionActions revision={revision} />
      ),
    }
  ],
}));

export const RevisionHistoryTable: React.FC = () => {
  return (
    <DynamicTable
      head={head}
      rows={rows}
      rowsPerPage={10}
      defaultPage={1}
      defaultSortKey="version-number"
      defaultSortOrder="DESC"
      onSort={() => console.log('onSort')}
      onSetPage={() => console.log('onSetPage')}
    />
  );
}

function RevisionLabel(props: { revision: Revision }) {
  if (!props.revision.label) {
    return (<>{props.revision.id}</>)
  }
  const color = props.revision.label.toLowerCase() === "production" ? "success" : "removed";

  return (
    <Flex gap={"space.100"} alignItems={"center"}>
      {props.revision.id}
      <Lozenge isBold appearance={color}>{props.revision.label}</Lozenge>
    </Flex>
  );
}

function RevisionActions(props: { revision: Revision }) {
  return (
    <SplitButton>
      <Button onClick={() => window.location.href=`https://www.yext.com/s/3744518/search2/experiences/default/revisionHistory/${props.revision.id}`}>
        View JSON
      </Button>
      <DropdownMenu<HTMLButtonElement>
        trigger={({ triggerRef, ...triggerProps }) => (
          <IconButton
            ref={triggerRef}
            {...triggerProps}
            icon={ChevronDownIcon}
            label="More options"
            UNSAFE_size="small"
          />
        )}
      >
        <DropdownItemGroup>
          <DropdownItem>
            Publish to Production
          </DropdownItem>
          <DropdownItem>
            Restore to Latest
          </DropdownItem>
        </DropdownItemGroup>
      </DropdownMenu>
    </SplitButton>
  );
};