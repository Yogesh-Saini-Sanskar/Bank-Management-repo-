# Copyright (c) 2023, Yogesh and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	columns, data = [], []
	return columns, data


from frappe import _

def execute(filters=None):
    # columns = [
    #     {"label": _("User"), "fieldname": "user", "fieldtype": "Link", "options": "User", "width": 120},
    #     {"label": _("Account Balance"), "fieldname": "account_balance", "fieldtype": "Currency", "width": 120},
    #     {"label": _("Branch"), "fieldname": "branch", "fieldtype": "Link", "options": "Branch Details", "width": 120},
    # ]

    # conditions = "WHERE ua.current_balance > 140000"

    # if filters.get("branch"):
    #     conditions += f" AND ua.branch = '{filters['branch']}'"

    # data = frappe.db.sql(f"""
    #     SELECT ua.user, ua.current_balance, ua.branch
    #     FROM `tabUser Account` ua
    #     {conditions}
    # """, as_dict=True)

    # return columns, data
	data = []

	if filters.branch is not None:
	    mysql = """
	        SELECT account_holder, ifsc_code , branch, account_number ,account_status , current_balance
	        FROM `tabUser Account`
	        WHERE current_balance > 140000 AND branch LIKE %s
	    """
	    filter_value = ('%' + filters.branch + '%',)
	    mydata = frappe.db.sql(mysql, filter_value, as_dict=True)
	    data = (columns, mydata, "Reports", None, None)
	else:
	    mysql = """
	       SELECT account_holder, ifsc_code , branch, account_number ,account_status , current_balance
	        FROM `tabUser Account`
	        WHERE current_balance > 140000
	    """
	    mydata = frappe.db.sql(mysql, as_dict=True)
	    data = (columns, mydata, "Reports", None, None)    







