import axios from "axios";

export default async function getIssues({
  page,
}: GetIssuesProps): Promise<IssuesResponse[] | false> {
  try {
    const { data } = await axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues`,
      {
        params: {
          page,
          per_page: 10,
          sort: "comments",
          direction: "desc",
        },
      }
    );

    return data;
  } catch {
    alert("Issue 리스트를 불러오는데 실패했습니다. 다시 시도해주세요.");
    return false;
  }
}

interface GetIssuesProps {
  page: number;
}

interface IssuesResponse {
  active_lock_reason: null;
  assignee: null;
  assignees: any[];
  author_association: string;
  body: string;
  closed_at: null;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: {
    color: string;
    default: boolean;
    description: string;
    id: number;
    name: string;
    node_id: string;
    url: string;
  }[];
  labels_url: string;
  locked: boolean;
  milestone: null;
  node_id: string;
  number: number;
  performed_via_github_app: null;
  reactions: {
    "+1": number;
    "-1": number;
    confused: number;
    eyes: number;
    heart: number;
    hooray: number;
    laugh: number;
    rocket: number;
    total_count: number;
    url: string;
  };
  repository_url: string;
  state: string;
  state_reason: null;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
  };
}

export type { GetIssuesProps, IssuesResponse };
