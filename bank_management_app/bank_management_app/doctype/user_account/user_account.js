// // Copyright (c) 2023, Yogesh and contributors
// // For license information, please see license.txt

// // frappe.ui.form.on("User Account", {
// // 	refresh(frm) {

// // 	},
// // });

frappe.ui.form.on("User Account", {
  validate: function (frm) {
    var totalDeposit = 0;
    var totalWithdrawal = 0;

    frm.doc.user_transaction.forEach(function (row) {
      if (row.transaction_type == "Deposit") {
        // frappe.msgprint("Deposit of " + row.amount + " recorded.");
        totalDeposit = totalDeposit + row.amount;
      } else if (row.transaction_type == "Withdrawal") {
        totalWithdrawal = totalWithdrawal + row.amount;
      }
    });
    var currentBalance = frm.doc.current_balance;
    if (totalWithdrawal > currentBalance) {
      var Excess_Withdrawal = totalWithdrawal - currentBalance;

      totalWithdrawal = currentBalance;
      frm.doc.transactions.forEach(function (row) {
        if (row.transaction_type === "Withdrawal") {
          row.amount = row.amount - Excess_Withdrawal;
        }
      });
    }

    frm.set_value(
      "current_balance",
      currentBalance + (totalDeposit - totalWithdrawal)
    );
  },
});
