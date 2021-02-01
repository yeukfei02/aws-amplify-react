# aws-amplify-react

This project wants to use `aws-amplify` to create a full-stack web project.

`api`: `graphql`, amplify will generate `query/mutation/subscription` based on `schema.graphql`, deploy in `aws appsync`

`db`: `dynaomodb`, amplify will create dynaomodb table based on `schema.graphql`

`web`: `react`, use `graphql` endpoint to render ui

url: https://main.d2i7j8suxljo52.amplifyapp.com/

## Requirement:

- install yarn
- install node (v12+)
- install aws amplify cli

## Testing and run:

```
// install node dependencies
$ yarn

// test in local
$ yarn run start

// use amplify cli, use help to see what command can use
$ amplify --help

amplify <command> <subcommand>

  init                Initializes a new project, sets up deployment resources in the cloud, and makes your project ready for Amplify.
  configure           Configures the attributes of your project for amplify-cli, such as switching front-end framework and adding/removing cloud-provider plugins.
  push                Provisions cloud resources with the latest local developments.
  pull                Fetch upstream backend environment definition changes from the cloud and updates the local environment to match that definition.
  publish             Executes amplify push, and then builds and publishes client-side application for hosting.
  serve               Executes amplify push, and then executes the project's start command to test run the client-side application locally.
  status              Shows the state of local resources not yet pushed to the cloud (Create/Update/Delete).
  delete              Deletes all of the resources tied to the project from the cloud.
  <category> add      Adds a resource for an Amplify category in your local backend
  <category> update   Update resource for an Amplify category in your local backend.
  <category> push     Provisions all cloud resources in a category with the latest local developments.
  <category> remove   Removes a resource for an Amplify category in your local backend.
  <category>          Displays subcommands of the specified Amplify category.
  mock                Run mock server for testing categories locally.
  codegen             Generates GraphQL statements(queries, mutations and eventHandlers) and type annotations.
  env                 Displays and manages environment related information for your Amplify project.
  console             Opens the web console for the selected cloud resource.
  logout              If using temporary cloud provider credentials, this logs out of the account.
```
