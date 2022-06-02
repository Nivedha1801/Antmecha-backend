const axios = require("axios");
const _ = require("underscore");

const getTasks = async (taskId) => {
  console.log("Getting task details");
  const allTasks = [];
  await axios({
    method: "GET",
    url: `https://api.clickup.com/api/v2/list/${taskId}/task`,
    headers: {
      Accept: "application/json",
      Authorization: "55394185_7733591c017da5b5b9d74c0ffdfabf2417d29307",
    },
  })
    .then((response) => {
      const tasks = response.data.tasks;
      for (let task of tasks) {
        const editedTask = {};
        editedTask.title = task.name;
        editedTask.assignee = task.assignees[0].username;
        editedTask.due_date = new Date(parseInt(task.due_date));
        for (let custom_field of task.custom_fields) {
          var custom_name = custom_field.name
            .toLowerCase()
            .split(" ")
            .join("_");
          if (custom_field.type == "date") {
            editedTask[custom_name] = new Date(parseInt(custom_field.value));
          } else if (custom_field.type == "drop_down") {
            editedTask[custom_name] =
              custom_field.type_config.options[custom_field.value].name;
          }
        }
        allTasks.push(editedTask);
      }
    })
    .catch((err) => {
      throw err;
    });
  return allTasks;
};

const getUsers = async (userId) => {
  console.log("Getting User details");
  const allTasks = [];
  await axios({
    method: "GET",
    url: `https://api.clickup.com/api/v2/list/${userId}/task`,
    headers: {
      Accept: "application/json",
      Authorization: "55394185_7733591c017da5b5b9d74c0ffdfabf2417d29307",
    },
  })
    .then((response) => {
      const tasks = response.data.tasks;
      for (let task of tasks) {
        const editedTask = {};
        editedTask.title = task.name;
        for (let custom_field of task.custom_fields) {
          var custom_name = custom_field.name
            .toLowerCase()
            .split(" ")
            .join("_");
          if (custom_field.type == "date") {
            editedTask[custom_name] = new Date(parseInt(custom_field.value));
          } else if (custom_field.type == "drop_down") {
            editedTask[custom_name] =
              custom_field.type_config.options[custom_field.value].name;
          } else if (custom_field.type == "number") {
            editedTask[custom_name] = parseInt(custom_field.value)
          }
        }
        allTasks.push(editedTask);
      }
    })
    .catch((err) => {
      throw err;
    });
  allTasks.sort((a,b) => a.order - b.order)
  return allTasks;
};

const getBudget = async(budgetid) => {
  console.log("Getting budget details");
  const allTasks = [];
  await axios({
    method: "GET",
    url: `https://api.clickup.com/api/v2/list/${budgetid}/task`,
    headers: {
      Accept: "application/json",
      Authorization: "55394185_7733591c017da5b5b9d74c0ffdfabf2417d29307",
    },
  })
    .then((response) => {
      const tasks = response.data.tasks;
      for (let task of tasks) {
        const editedTask = {};
        editedTask.title = task.name;
        editedTask.due_date = new Date(parseInt(task.due_date));
        editedTask.priority = task.priority.priority;
        for (let custom_field of task.custom_fields) {
          var custom_name = custom_field.name
            .toLowerCase()
            .split(" ")
            .join("_");
          if (custom_field.type == "date") {
            editedTask[custom_name] = new Date(parseInt(custom_field.value));
          } else if (custom_field.type == "drop_down") {
            editedTask[custom_name] =
              custom_field.type_config.options[custom_field.value].name;
          } else if (custom_field.type == "number") {
            editedTask[custom_name] = parseInt(custom_field.value)
          } else if (custom_field.type == "currency") {
            editedTask[custom_name] = custom_field.value
          } else if (custom_field.type == "formula") {
            editedTask[custom_name] = custom_field.value
          }
        }
        allTasks.push(editedTask);
      }
    })
    .catch((err) => {
      throw err;
    });
  console.log(allTasks);
  return allTasks;
}

const getProject = async(projectid) => {
  console.log("Getting project details");
  const allTasks = [];
  await axios({
    method: "GET",
    url: `https://api.clickup.com/api/v2/list/${projectid}/task`,
    headers: {
      Accept: "application/json",
      Authorization: "55394185_7733591c017da5b5b9d74c0ffdfabf2417d29307",
    },
  })
    .then((response) => {
      const tasks = response.data.tasks;
      for (let task of tasks) {
        const editedTask = {};
        editedTask.title = task.name;
        editedTask.due_date = new Date(parseInt(task.due_date));
        for (let custom_field of task.custom_fields) {
          var custom_name = custom_field.name
            .toLowerCase()
            .split(" ")
            .join("_");
          if (custom_field.type == "date") {
            editedTask[custom_name] = new Date(parseInt(custom_field.value));
          } else if (custom_field.type == "drop_down") {
            editedTask[custom_name] =
              custom_field.type_config.options[custom_field.value].name;
          } else if (custom_field.type == "number") {
            editedTask[custom_name] = parseInt(custom_field.value)
          } else if (custom_field.type == "currency") {
            editedTask[custom_name] = parseInt(custom_field.value)
          } else if (custom_field.type == "formula") {
            editedTask[custom_name] = custom_field.value
          }
        }
        allTasks.push(editedTask);
      }
    })
    .catch((err) => {
      throw err;
    });
  console.log(allTasks);
  return allTasks;
}

const getCustomers = async(customerid) => {
  console.log("Getting Customer details");
  const allTasks = [];
  await axios({
    method: "GET",
    url: `https://api.clickup.com/api/v2/list/${customerid}/task`,
    headers: {
      Accept: "application/json",
      Authorization: "55394185_7733591c017da5b5b9d74c0ffdfabf2417d29307",
    },
  })
    .then((response) => {
      const tasks = response.data.tasks;
      for (let task of tasks) {
        const editedTask = {};
        editedTask.title = task.name;
        for (let custom_field of task.custom_fields) {
          var custom_name = custom_field.name
            .toLowerCase()
            .split(" ")
            .join("_");
          if (custom_field.type == "date") {
            editedTask[custom_name] = new Date(parseInt(custom_field.value));
          } else if (custom_field.type == "drop_down") {
            editedTask[custom_name] =
              custom_field.type_config.options[custom_field.value].name;
          } else if (custom_field.type == "number") {
            editedTask[custom_name] = parseInt(custom_field.value)
          } else if (custom_field.type == "currency") {
            editedTask[custom_name] = parseInt(custom_field.value)
          } else if (custom_field.type == "formula") {
            editedTask[custom_name] = custom_field.value
          }
        }
        allTasks.push(editedTask);
      }
    })
    .catch((err) => {
      throw err;
    });
  return allTasks;
}

const getLists = async (listName) => {
  console.log("Getting all lists");
  var result;
  switch (listName) {
    case "Tasks":
      result = await getTasks('187333767');
      break;
    case "Customers":
      result = await getCustomers('187334917');
      break;
    case "Users":
      result = await getUsers('187334916');
      break;
    case "Project Details":
      result = await getProject('187334907');
      break;
    case "Budget Allocation":
      result = await getBudget('187336031');
      break;
    case "Resources":
      break;
    case "Tickets":
      break;
  }
  return result;
};


const getOverdueCard = async (req, res) => {
  console.log("Getting Overdue Card");
  const list = await getLists('Tasks');
  const overdueList = list.filter(obj => (obj.due_date < new Date()) && (obj.status != "Completed") && (obj.status != "Approved"));
  overdueList.map((val) => {
    intValue = parseInt((new Date() - val.due_date)/(1000*60*60*24), 10) + 1;
    if (intValue == 1) val.overdue_days = intValue.toString() + " Day"
    else val.overdue_days = intValue.toString() + " Days"
  });
  res.send(overdueList)
};

const getUpcomingCard = async (req,res) => {
  console.log("Getting upcoming card");
  const list = await getLists('Tasks');
  const upcomingCard = list.filter(obj => (obj.due_date >= new Date()) && (obj.status == "New") && (obj.status == "Active"));
  res.send(upcomingCard);
}

const getProjectCard = async(req,res) => {
  const list = await getLists('Project Details');
  list.map((project) => {
    intDays = parseInt((project.due_date - new Date())/(1000*60*60*24), 10) + 1;
    project.remaining_days = intDays.toString()+ " Days";
    project.start_date = new Date(project.start_date).toUTCString();
    project.due_date = new Date(project.due_date).toUTCString();
    project.budget_remaining = project.budget - project.budget_used;
  })
  
  res.send(list)
}

const getWorkLoadCard = async(req,res) => {
  const list = await getLists('Tasks');
  const totalTask = list.length;
  const groupbyAssignee = _.groupBy(list, "assignee");
  const workLoad = []
  for (let key in groupbyAssignee) {
    const keyObj = {}
    keyObj.assignee = key;
    keyObj.percentage = ((groupbyAssignee[key].length/totalTask)*100).toString() + " %"
    workLoad.push(keyObj)
  }
  res.send(workLoad)
}

const getCustomerDetails = async(req,res) => {
  const list = await getLists('Customers');
  for (let customer of list) {
    customer.customer_percentage = ((customer.actual_customers/customer.targeted_customers)*100).toString() + " %";
    customer.cost_percentage = ((customer.actual_cost/customer.targeted_cost)*100).toString() + " %";
  }
  res.send(list)
}

const getStatusDetails = async (req,res) => {
  const list = await getLists('Tasks');
  const statusGroup = _.groupBy(list, 'status');
  const statusLoad = []
  for (let key in statusGroup) {
    const keyObj = {}
    keyObj.name = key;
    keyObj.value = statusGroup[key].length
    statusLoad.push(keyObj)
  }
  res.send(statusLoad);
}

module.exports = {
  getLists,
  getOverdueCard,
  getUpcomingCard,
  getProjectCard,
  getWorkLoadCard,
  getCustomerDetails,
  getStatusDetails
};
