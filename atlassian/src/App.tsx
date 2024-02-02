import './App.css'

import {RevisionHistoryTable} from "./RevisionHistoryTable.tsx";

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import __noop from '@atlaskit/ds-lib/noop';

import PageHeader from '@atlaskit/page-header';

const breadcrumbs = (
  <Breadcrumbs onExpand={__noop}>
    <BreadcrumbsItem href={"https://www.yext.com/s/3744518/search2/experiences"} text={"Search"} />
    <BreadcrumbsItem href={"https://www.yext.com/s/3744518/search2/experiences/default/verticals"} text={"test"} />
    <BreadcrumbsItem text="Revision History" />
  </Breadcrumbs>
);

function App() {
  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs}>
        Revision History
      </PageHeader>
      <p>Use this page to see all revisions of your search configuration and assign your latest and production labels to a specific revision.</p>
      <RevisionHistoryTable/>
    </>
  )
}

export default App
