function getTimeString(time) {
  const hours = parseInt(time / 3600);
  let remainingSec = time % 3600;
  const min = parseInt(remainingSec / 60);
  remainingSec = remainingSec % 60;

  return `${hours} hours ${min} minute ${remainingSec} second ago`;
}
console.log(getTimeString(5800));
