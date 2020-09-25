import taskManagementCategory from "<pages>/Home/sections/skills/categories/taskManagementCategory";

describe("pages / Home / sections / skills / categories/ taskManagementCategory", () => {
  test("should have correct content", () => {
    expect(taskManagementCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandJIRA",
          label: "JIRA"
        },
        {
          iconName: "brandPhabricator",
          label: "Phabricator"
        },
        {
          iconName: "brandRedmine",
          label: "Redmine"
        },
        {
          iconName: "brandQuire",
          label: "Quire"
        },
        {
          iconName: "brandTrello",
          label: "Trello"
        },
        {
          iconName: "brandTaskade",
          label: "Taskade"
        },
        {
          iconName: "brandBasecamp",
          label: "Basecamp"
        }
      ],
      title: "Task Management"
    });
  });
});