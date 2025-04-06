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
  return 'w-10 h-10 bg-[#d9d9d9] shadow-[inset_1px_1px_5px_0_rgba(0,0,0,0.25),_inset_-1px_-1px_5px_0_rgba(0,0,0,0.25)] px-[5px] py-[5px] rounded-lg hover:bg-[#fff5f5] hover:cursor-pointer hover:cursor-pointer disabled:hover:bg-[#d9d9d9] disabled:hover:cursor-default';
}

function unactiveSvg() {
  return 'w-10 h-10 bg-[#d9d9d9] shadow-[inset_1px_1px_5px_0_rgba(0,0,0,0.25),_inset_-1px_-1px_5px_0_rgba(0,0,0,0.25)] px-[5px] py-[5px] rounded-lg hover:bg-[#fff5f5] hover:cursor-none fill-[#c7afaf]';
}

function profileStyleSvg() {
  return 'h-[30px] w-[30px]';
}

function radioRegisterStyleBtn() {
  return 'h-3.5 px-[5px] text-[#090202] bg-[#d9d9d9] text-center rounded-full hover:bg-[#fff5f5] hover:cursor-pointer peer-checked/male:opacity-100 peer-checked/male:shadow-[inset_1px_1px_5px_0_rgba(0,0,0,0.25),_inset_-1px_-1px_5px_0_rgba(0,0,0,0.15)] opacity-50 peer-checked/female:opacity-100 peer-checked/female:shadow-[inset_1px_1px_5px_0_rgba(0,0,0,0.25),_inset_-1px_-1px_5px_0_rgba(0,0,0,0.15)]';
}

export {
  radioRegisterStyleBtn,
  unactiveSvg,
  settingStyleList,
  settingStyleBtn,
  backStyleBtn,
  profileStyleBtn,
  profileStyleSvg,
};
