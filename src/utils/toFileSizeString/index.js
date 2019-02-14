const toFileSizeString = size => {
  if (size > 1e9) {
    // > Gigabyte
    return `${(size / 1e9).toFixed(1)} GB`;
  }
  if (size > 1e6) {
    // > Megabytes
    return `${Math.floor(size / 1e6)} MB`;
  }
  if (size > 1e3) {
    // > Kilabytes
    return `${Math.floor(size / 1e3)} KB`;
  }
  if (size >= 1) {
    // > Bytes
    return `${size} B`;
  }
  return '0 B';
};

export default toFileSizeString;
