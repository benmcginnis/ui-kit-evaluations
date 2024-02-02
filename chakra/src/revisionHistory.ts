
export const RevisionHistory: Revision[] = [
  {
    id:80,
    label:"Latest",
    timestamp:"2023-12-14T18:04:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (Restored from revision 78)"
  },
  {
    id:79,
    timestamp:"2023-09-25T17:43:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:78,
    timestamp:"2023-09-25T17:42:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:77,
    timestamp:"2023-09-21T16:15:00.000Z",
    updatedBy:""
  },
  {
    id:76,
    timestamp:"2023-09-21T16:15:00.000Z",
    updatedBy:""
  },
  {
    id:75,
    label:"Production",
    timestamp:"2023-09-21T16:00:00.000Z",
    updatedBy:""
  },
  {
    id:74,
    timestamp:"2023-09-21T15:58:00.000Z",
    updatedBy:""
  },
  {
    id:73,
    timestamp:"2023-09-21T15:54:00.000Z",
    updatedBy:""
  },
  {
    id:72,
    timestamp:"2023-09-21T15:52:00.000Z",
    updatedBy:""
  },
  {
    id:71,
    timestamp:"2023-09-21T15:48:00.000Z",
    updatedBy:"canderson on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:70,
    timestamp:"2023-09-21T15:48:00.000Z",
    updatedBy:"canderson on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:69,
    timestamp:"2023-09-13T14:42:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:68,
    timestamp:"2023-09-08T16:26:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:67,
    timestamp:"2023-09-08T16:23:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:66,
    timestamp:"2023-08-31T15:31:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:65,
    timestamp:"2023-08-10T14:00:00.000Z",
    updatedBy:"likim on behalf of Joe Shmoe (jshmoe@company.com) (Edit Mode)"
  },
  {
    id:64,
    timestamp:"2023-08-08T20:12:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:63,
    timestamp:"2023-07-13T17:22:00.000Z",
    updatedBy:"bmcginnis on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:62,
    timestamp:"2023-07-12T17:17:00.000Z",
    updatedBy:"ezhang on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:61,
    timestamp:"2023-07-12T13:06:00.000Z",
    updatedBy:"ezhang on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:60,
    timestamp:"2023-07-12T13:02:00.000Z",
    updatedBy:"ezhang on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:59,
    timestamp:"2023-07-12T12:58:00.000Z",
    updatedBy:"ezhang on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:58,
    timestamp:"2023-07-12T12:57:00.000Z",
    updatedBy:"ezhang on behalf of Joe Shmoe (jshmoe@company.com) (Interactive Editor)"
  },
  {
    id:57,
    timestamp:"2023-07-12T12:56:00.000Z",
    updatedBy:"ezhang on behalf of Joe Shmoe (jshmoe@company.com) (JSON Editor)"
  },
  {
    id:56,
    timestamp:"2023-07-12T12:56:00.000Z",
    updatedBy:"ezhang on behalf of Joe Shmoe (jshmoe@company.com) (Edit Mode)"}
];

export type Revision = {
  id: number;
  timestamp: string;
  updatedBy: string;
  label?: string;
}
