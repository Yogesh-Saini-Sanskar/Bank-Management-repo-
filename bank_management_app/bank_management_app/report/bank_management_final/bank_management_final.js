// Copyright (c) 2023, Yogesh and contributors
// For license information, please see license.txt

// frappe.query_reports["Bank Management final"] = {
// 	"filters": [

// 	]
// };



frappe.query_reports["Bank Management final"] = {
columns = [
    {
        'fieldname': 'account_holder',
        'label': _('Account-Holder'),
        'fieldtype': 'Data',
        'width': 200
    },
    
    {
        'fieldname': 'current_balance',
        'label': _('Balance'),
        'fieldtype': 'Data',
        'width': 200
    },
    {
        'fieldname': 'account_number',
        'label': _('account_number'),
        'fieldtype': 'Data',
        'width': 200
    },
    {
        'fieldname': 'account_status',
        'label': _('Status'),
        'fieldtype': 'Data',
        'width': 200
    },
    {
        'fieldname': 'branch_name',
        'label': _('Branch'),
        'fieldtype': 'Data',
        'width': 200
    },
]



// 		"filters": [

//     {
//       fieldname: "branch",
//       label: "Branch",
//       fieldtype: "Link",
//       options: "Branch Details",
//     },
//     {
//       fieldname: "account_status",
//       label: "Account Status",
//       fieldtype: "Select",
//       options: "\nActive\nInactive",
//     },
//   ],
};

