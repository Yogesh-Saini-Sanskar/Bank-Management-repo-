# Copyright (c) 2023, Yogesh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class UserTransaction(Document):
	pass

# @frappe.whitelist()
# def updateAmount(amount):
# 	User_Transaction= frappe.new_doc("User Transaction")
#     User_Transaction.current_balance = amount
#     frappe.msgprint("Branch created successfully")