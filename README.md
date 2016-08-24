# worker_js

WorkerJs - JavaScript client for worker_js
The ultimate, language agnostic, container based task processing framework.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.5.7
- Package version: 0.5.7
- Build date: 2016-08-24T18:32:28.763Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install worker_js --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/worker_js
then install it via:

```shell
    npm install YOUR_USERNAME/worker_js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WorkerJs = require('worker_js');

var api = new WorkerJs.GroupsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WorkerJs.GroupsApi* | [**groupsGet**](docs/GroupsApi.md#groupsGet) | **GET** /groups | Get all group names.
*WorkerJs.GroupsApi* | [**groupsNameGet**](docs/GroupsApi.md#groupsNameGet) | **GET** /groups/{name} | Get information for a group.
*WorkerJs.GroupsApi* | [**groupsNamePut**](docs/GroupsApi.md#groupsNamePut) | **PUT** /groups/{name} | Create/update a task group.
*WorkerJs.GroupsApi* | [**groupsPost**](docs/GroupsApi.md#groupsPost) | **POST** /groups | Post new group
*WorkerJs.RunnerApi* | [**groupsNameTasksIdErrorPost**](docs/RunnerApi.md#groupsNameTasksIdErrorPost) | **POST** /groups/{name}/tasks/{id}/error | Mark task as failed.
*WorkerJs.RunnerApi* | [**groupsNameTasksIdStartPost**](docs/RunnerApi.md#groupsNameTasksIdStartPost) | **POST** /groups/{name}/tasks/{id}/start | Mark task as started, ie: status &#x3D; &#39;running&#39;
*WorkerJs.RunnerApi* | [**groupsNameTasksIdSuccessPost**](docs/RunnerApi.md#groupsNameTasksIdSuccessPost) | **POST** /groups/{name}/tasks/{id}/success | Mark task as succeeded.
*WorkerJs.TasksApi* | [**groupsNameTasksGet**](docs/TasksApi.md#groupsNameTasksGet) | **GET** /groups/{name}/tasks | Get task list by group name.
*WorkerJs.TasksApi* | [**groupsNameTasksIdCancelPost**](docs/TasksApi.md#groupsNameTasksIdCancelPost) | **POST** /groups/{name}/tasks/{id}/cancel | Cancel a task.
*WorkerJs.TasksApi* | [**groupsNameTasksIdDelete**](docs/TasksApi.md#groupsNameTasksIdDelete) | **DELETE** /groups/{name}/tasks/{id} | Delete the task.
*WorkerJs.TasksApi* | [**groupsNameTasksIdErrorPost**](docs/TasksApi.md#groupsNameTasksIdErrorPost) | **POST** /groups/{name}/tasks/{id}/error | Mark task as failed.
*WorkerJs.TasksApi* | [**groupsNameTasksIdGet**](docs/TasksApi.md#groupsNameTasksIdGet) | **GET** /groups/{name}/tasks/{id} | Gets task by id
*WorkerJs.TasksApi* | [**groupsNameTasksIdLogGet**](docs/TasksApi.md#groupsNameTasksIdLogGet) | **GET** /groups/{name}/tasks/{id}/log | Get the log of a completed task.
*WorkerJs.TasksApi* | [**groupsNameTasksIdLogPost**](docs/TasksApi.md#groupsNameTasksIdLogPost) | **POST** /groups/{name}/tasks/{id}/log | Send in a log for storage.
*WorkerJs.TasksApi* | [**groupsNameTasksIdRetryPost**](docs/TasksApi.md#groupsNameTasksIdRetryPost) | **POST** /groups/{name}/tasks/{id}/retry | Retry a task.
*WorkerJs.TasksApi* | [**groupsNameTasksIdStartPost**](docs/TasksApi.md#groupsNameTasksIdStartPost) | **POST** /groups/{name}/tasks/{id}/start | Mark task as started, ie: status &#x3D; &#39;running&#39;
*WorkerJs.TasksApi* | [**groupsNameTasksIdSuccessPost**](docs/TasksApi.md#groupsNameTasksIdSuccessPost) | **POST** /groups/{name}/tasks/{id}/success | Mark task as succeeded.
*WorkerJs.TasksApi* | [**groupsNameTasksIdTouchPost**](docs/TasksApi.md#groupsNameTasksIdTouchPost) | **POST** /groups/{name}/tasks/{id}/touch | Extend task timeout.
*WorkerJs.TasksApi* | [**groupsNameTasksPost**](docs/TasksApi.md#groupsNameTasksPost) | **POST** /groups/{name}/tasks | Enqueue task
*WorkerJs.TasksApi* | [**tasksGet**](docs/TasksApi.md#tasksGet) | **GET** /tasks | Get next task.


## Documentation for Models

 - [WorkerJs.Complete](docs/Complete.md)
 - [WorkerJs.Error](docs/Error.md)
 - [WorkerJs.ErrorBody](docs/ErrorBody.md)
 - [WorkerJs.Group](docs/Group.md)
 - [WorkerJs.GroupWrapper](docs/GroupWrapper.md)
 - [WorkerJs.GroupsWrapper](docs/GroupsWrapper.md)
 - [WorkerJs.IdStatus](docs/IdStatus.md)
 - [WorkerJs.NewTask](docs/NewTask.md)
 - [WorkerJs.NewTasksWrapper](docs/NewTasksWrapper.md)
 - [WorkerJs.Start](docs/Start.md)
 - [WorkerJs.Task](docs/Task.md)
 - [WorkerJs.TaskWrapper](docs/TaskWrapper.md)
 - [WorkerJs.TasksWrapper](docs/TasksWrapper.md)


## Documentation for Authorization

 All endpoints do not require authorization.

