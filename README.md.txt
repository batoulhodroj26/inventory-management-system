# Smart Inventory Management

A responsive, feature-rich Inventory Management System built with HTML, CSS, and JavaScript.  
Includes role-based access control, AI-powered stock status updates, dark mode toggle, real-time inventory value calculation, and interactive toast notifications.  
Designed to demonstrate practical web development skills and creativity, ideal for interviews and portfolio projects.

---

## Features

- Add, edit, and delete inventory items with details: name, quantity, price, category, description, and status.
- Role-based access control with three roles: Admin (full access), Staff (add/edit), Viewer (read-only).
- Automatic AI-based stock status assignment based on quantity input.
- Restock reminder alert for low or ordered stock items.
- Real-time total inventory value calculation (quantity × price).
- Dark mode toggle for improved user experience.
- Animated toast notifications for smooth feedback.
- Search functionality to filter items by name, category, status, or description.

---

## How to Run Locally
Example 1: Add a New Inventory Item
Role: Select Admin (full access)

Fill the form:

Name: Laptop

Quantity: 8

Price: 750.00

Category: Electronics

Description: Business laptops

Status: Leave default (auto sets to In Stock based on quantity)

Click: Add / Update Item

What happens:

New item appears in the table with calculated total value (8 × 750 = $6000)

Toast notification: “Item added successfully!”

Bottom displays: Total Inventory Value: $6000.00

Example 2: Edit an Existing Item
Click the ✏️ (edit) button next to the Laptop item.

Change Quantity from 8 to 3.

Click Add / Update Item.

What happens:

Item updates in the table.

Status automatically changes to Low Stock due to low quantity.

Toast notification: “Item updated successfully!”

Total inventory value recalculates accordingly.

Example 3: Delete an Item
Click 🗑️ (delete) next to the Laptop item.

Confirm deletion popup.

What happens:

Item removed from the table.

Toast notification: “Item deleted successfully!”

Inventory total updates.

Example 4: Use Role-Based Access
Select role Viewer from the dropdown.

Notice the form fields and action buttons become disabled.

You can only search and view inventory items, no edits allowed.

Example 5: Restock Reminder Alert
Add an item with low quantity, e.g. Quantity 2.

Status auto sets to Low Stock.

After adding, a popup alert appears:

csharp
Copy
Edit
Restock Reminder: The following items are low or ordered and need attention:
[Item Name]
Example 6: Search Inventory
Use the search box to filter by:

Name: type laptop

Category: type electronics

Status: type low stock

The table dynamically updates to show matching results.

Example 7: Toggle Dark Mode
Click the Toggle Dark Mode button at the top-right.

The entire interface switches to a dark theme for comfortable viewing.

Click again to switch back.

Summary of What to Test
Feature	How to Try
Add/Edit/Delete Items	Use the form and action buttons
Role-Based Access	Change roles and observe behavior
Auto AI Status	Change quantity and see status update
Restock Alert Popup	Add low stock items
Search Filter	Type keywords in search box
Dark Mode	Click dark mode toggle button
Toast Notifications	Watch for add/edit/delete feedback
----------------------------------------------------------------------------------------------------------------------------------------------------
Minimum Requirements Implemented
Add, Edit, and Delete inventory items with fields:

Name, Quantity, Category, and Description

Status Tracking of items:

Mark as In Stock, Low Stock, Ordered, or Discontinued

Search and Filter inventory by:

Name, Category, Status, or other attributes

----Additional Creative Features Added
Role-Based Access Control with three roles:

Admin (full access), Staff (add/edit), Viewer (read-only)

Price per Item & Total Inventory Value calculated live

Dark Mode Toggle for user-friendly theme switching

AI-Powered Stock Status auto-adjusts based on quantity input

Restock Reminder Alert popup for low or ordered items

Animated Toast Notifications for add/edit/delete actions

Responsive UI and polished design for better UX

