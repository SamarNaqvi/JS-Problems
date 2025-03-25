# Hierarchical Checkbox Problem

## Problem Description

I'm implementing a tree-like checkbox structure where checkboxes exist in a parent-child hierarchy. The relationships between checkboxes need to follow these rules:

1. When a parent checkbox is checked/unchecked, all its children should be checked/unchecked accordingly
2. A parent checkbox should be checked only when all of its children are checked
3. When any child checkbox is unchecked, its parent should also be unchecked
4. The changes should propagate upward and downward through the entire hierarchy

For example, if we have a structure like:

- Category 1
  - Item 1.1
  - Item 1.2
- Category 2
  - Item 2.1
  - Item 2.2

Checking "Category 1" should automatically check "Item 1.1" and "Item 1.2". Similarly, if both "Item 1.1" and "Item 1.2" are checked, "Category 1" should be checked. If "Item 1.1" is unchecked, "Category 1" should also become unchecked.
