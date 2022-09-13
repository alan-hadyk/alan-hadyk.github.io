import { fetchCommits } from "api/fetchCommits";
import { ICommitProps } from "components/molecules/@types/ListOfCommits";
import fetch from "node-fetch";

jest.mock("node-fetch");

const commitsList: ICommitProps[] = [
  {
    commit: {
      author: {
        date: "2020-03-15T14:58:16Z"
      }
    },
    html_url:
      "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
    sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
  },
  {
    commit: {
      author: {
        date: "2020-03-14T16:05:26Z"
      }
    },
    html_url:
      "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
    sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
  }
];

afterEach(() => {
  jest.resetAllMocks();
});

describe("api / fetchCommits", () => {
  test("should return an array of commits if GitHub API call's status is 200", async () => {
    const spyFetch = jest.fn();
    const mockFetch = fetch as unknown as jest.Mock;

    mockFetch.mockImplementation((args) => {
      spyFetch(args);

      return new Response(JSON.stringify(commitsList), {
        status: 200
      });
    });

    const fetchCommitsResult = await fetchCommits();

    expect(spyFetch).toHaveBeenCalledWith(
      "https://api.github.com/repos/alan-hadyk/portfolio/commits"
    );
    expect(fetchCommitsResult).toEqual(commitsList);
  });

  test("should return an error if GitHub API call fails", async () => {
    const mockFetch = fetch as unknown as jest.Mock;

    mockFetch.mockImplementation(() => {
      return new Response(
        JSON.stringify({
          documentation_url:
            "https://docs.github.com/rest/reference/repos#list-commits",
          message: "Not Found"
        }),
        {
          status: 404
        }
      );
    });

    try {
      await fetchCommits();

      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(
        new Error(
          JSON.stringify({
            documentation_url:
              "https://docs.github.com/rest/reference/repos#list-commits",
            message: "Not Found"
          })
        )
      );
    }
  });
});
