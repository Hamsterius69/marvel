const updateWordToSearch = (word) => {
  return {
    type: 'MODIFY_WORD',
    payload: word,
  };
};

const updatekindItemToSearch = (KindItem) => {
  console.log(`action: ${KindItem}`)
  return {
    type: 'MODIFY_ITEM',
    payload: KindItem,
  };
};

// export { updateWordToSearch };
export { updateWordToSearch, updatekindItemToSearch };