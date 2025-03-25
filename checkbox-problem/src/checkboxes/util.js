// Recursively set children to match parent's state
export const setChildLogic = (nodeLabel, parentChecked) => {
  const node = document.querySelector(`[id="${nodeLabel}"]`);
  if (!node) return;

  node.checked = parentChecked;
  const children = document.querySelectorAll(`[id^="${nodeLabel}_"]`);
  if (children.length === 0) return;

  children.forEach((child) => {
    setChildLogic(child.id, parentChecked);
  });
};

// Update parents based on children's state
export const setParentLogic = (nodeLabel) => {
  const labelString = String(nodeLabel);
  const nodeids = labelString.split("_");

  if (nodeids.length <= 1) return;

  const parentId = nodeids.slice(0, -1).join("_");
  const parent = document.querySelector(`[id="${parentId}"]`);
  if (!parent) return;

  const node = document.querySelector(`[id="${nodeLabel}"]`);
  if (!node) return;

  // Get all siblings (children of the same parent)
  const siblings = document.querySelectorAll(`[id^="${parentId}_"]`);

  // Check if all siblings are checked
  let allChecked = true;
  siblings.forEach((sibling) => {
    if (!sibling.checked) {
      allChecked = false;
    }
  });

  // Set parent's state based on children
  parent.checked = allChecked;

  // Continue up the hierarchy
  setParentLogic(parentId);
};
