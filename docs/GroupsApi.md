# IronTitan.GroupsApi

All URIs are relative to *https://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsGet**](GroupsApi.md#groupsGet) | **GET** /groups | Get all group names.
[**groupsNameGet**](GroupsApi.md#groupsNameGet) | **GET** /groups/{name} | Get information for a group.


<a name="groupsGet"></a>
# **groupsGet**
> GroupsWrapper groupsGet

Get all group names.

Get a list of all the groups in the system.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.GroupsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GroupsWrapper**](GroupsWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsNameGet"></a>
# **groupsNameGet**
> GroupWrapper groupsNameGet(name)

Get information for a group.

This gives more details about a job group, such as statistics.

### Example
```javascript
var IronTitan = require('iron_titan');

var apiInstance = new IronTitan.GroupsApi()

var name = "name_example"; // {String} name of the group.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupsNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the group. | 

### Return type

[**GroupWrapper**](GroupWrapper.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json
