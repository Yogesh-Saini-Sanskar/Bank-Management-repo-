# Copyright (c) 2023, Yogesh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class BankDetails(Document):
	pass



@frappe.whitelist()
def create_new_branch( bank,branch_name, city, state, country,branch_code):
    branch = frappe.new_doc("Branch Details")
    branch.bank_details = bank
    branch.branch_code = branch_code
    branch.branch_name = branch_name
    branch.city = city
    branch.state = state
    branch.country = country
    
    frappe.msgprint("Branch created successfully")
    branch.insert()
    

