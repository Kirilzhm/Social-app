function settingStyleList() {
  return 'hover:cursor-pointer hover:font-bold active:font-bold';
}
function settingStyleBtn() {
  return 'hover:cursor-pointer h-[25px] w-[25px] fill-current text-[#CFCFCF] hover:text-[#FAFAFA] focus:text-[#FAFAFA]';
}
function backStyleBtn() {
  return 'hover:cursor-pointer h-[25px] w-[25px] fill-current text-[#CFCFCF] hover:text-[#FAFAFA] focus:text-[#FAFAFA] items-center';
}
function profileStyleBtn() {
  return 'w-10 h-10 bg-[#d9d9d9] shadow-[inset_1px_1px_5px_0_rgba(0,0,0,0.25),_inset_-1px_-1px_5px_0_rgba(0,0,0,0.25)] px-[5px] py-[5px] rounded-lg hover:bg-[#fff5f5] hover:cursor-pointer';
}

function unactiveSvg(){
  return 'w-10 h-10 bg-[#d9d9d9] shadow-[inset_1px_1px_5px_0_rgba(0,0,0,0.25),_inset_-1px_-1px_5px_0_rgba(0,0,0,0.25)] px-[5px] py-[5px] rounded-lg hover:bg-[#fff5f5] hover:cursor-none fill-[#c7afaf]';
}

function profileStyleSvg() {
  return 'h-[30px] w-[30px]';
}

export {
  unactiveSvg,
  settingStyleList,
  settingStyleBtn,
  backStyleBtn,
  profileStyleBtn,
  profileStyleSvg,
};
