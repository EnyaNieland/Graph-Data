import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const sampleData = {
  data: [
    {
      name: "A",
      description: "This is a description of A",
      parent: "",
    },
    {
      name: "B",
      description: "This is a description of B",
      parent: "A",
    },
    {
      name: "C",
      description: "This is a description of C",
      parent: "A",
    },
    {
      name: "D",
      description: "This is a description of D",
      parent: "A",
    },
    {
      name: "B-1",
      description: "This is a description of B-1",
      parent: "B",
    },
    {
      name: "B-2",
      description: "This is a description of B-2",
      parent: "B",
    },
    {
      name: "B-3",
      description: "This is a description of B-3",
      parent: "B",
    },
  ],
};

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: sampleData,
  };
};

export default httpTrigger;
