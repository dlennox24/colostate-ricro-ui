const toFileSizeString = size => {
  let fileSize = '0 B';
  if (size > 1e9) {
    // > Gigabyte
    fileSize = `${(size / 1e9).toFixed(1)} GB`;
  }
  if (size > 1e6) {
    // > Megabytes
    fileSize = `${Math.floor(size / 1e6)} MB`;
  }
  if (size > 1e3) {
    // > Kilabytes
    fileSize = `${Math.floor(size / 1e3)} KB`;
  }
  if (size >= 1) {
    // > Bytes
    fileSize = `${size} B`;
  }
  return fileSize;
};

export default toFileSizeString;
