const colorToRgba = (color, perc) => {
  color = color.replace(/\s/g, '');

  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  if (color.match(hexRegex)) {
    const rgba = hexRegex.exec(color);
    return `rgba(${parseInt(rgba[1], 16)},${parseInt(rgba[2], 16)},${parseInt(
      rgba[3],
      16,
    )},${perc})`;
  }

  const rgbaRegex = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*(\d?.\d))?\)$/i;
  if (color.match(rgbaRegex)) {
    const rgba = rgbaRegex.exec(color);
    return `rgba(${rgba[1]},${rgba[2]},${rgba[3]},${perc})`;
  }

  // eslint-disable-next-line no-console
  console.warn(`DropZoneRenderer: Color transparency not transformed: ${color}`);
  return color;
};

export default colorToRgba;
