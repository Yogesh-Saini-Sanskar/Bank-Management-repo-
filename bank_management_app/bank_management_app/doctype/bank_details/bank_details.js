// Copyright (c) 2023, Yogesh and contributors
// For license information, please see license.txt

frappe.ui.form.on("Bank Details", {
  refresh: function (frm) {
    // Add a custom button to create a new branch
    // frappe.msgprint("hiiiiiii" + frm.bank_name);
    frm.add_custom_button("Add New Branch", function () {
      // Open a dialog to create a new branch

      let d = new frappe.ui.Dialog({
        title: "Create branch",
        fields: [
          {
            label: "Branch Name",
            fieldname: "branch_name",
            fieldtype: "Data",
            reqd: 1,
          },
          {
            label: "Branch Code",
            fieldname: "branch_code",
            fieldtype: "Data",
          },
          {
            label: "State",
            fieldname: "state",
            fieldtype: "Data",
          },
          {
            label: "City",
            fieldname: "city",
            fieldtype: "Data",
          },
          {
            label: "Country",
            fieldname: "country",
            fieldtype: "Data",
          },
          {
            label: "Bank",
            fieldname: "bank_name",
            fieldtype: "Link",
            // options: "Bank Details",
            default: frm.doc.bank_name,
            read_only: 1,
            reqd: 1,
          },
        ],
        primary_action_label: "submit",
        primary_action(values) {
          if (values.branch_name === undefined) {
            frappe.msgprint("Please Enter The Branch Name First!");
          } else {
            console.log(values);
            frappe.call({
              method:
                "bank_management_app.bank_management_app.doctype.bank_details.bank_details.create_new_branch",
              args: {
                branch_name: values.branch_name,
                branch_code: values.branch_code,
                state: values.state,
                city: values.city,
                country: values.country,
                bank: frm.doc.bank_name,
              },
            });
          }
          console.log(frm.doc.bank_name);
          
          frm.save();
        },
      });
      d.show();

      //     frappe.call({
      //     method:
      //       "bank_management_app.bank_management_app.doctype.bank_details.bank_details.make_new_branch",
      //     args: {
      //       bank_details: frm.doc.bank_name,
      //     },
      //   });
    });
  },
});
