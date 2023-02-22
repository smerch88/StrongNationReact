import { DropdownIconBox, EditIconsBox, MockupIconBox } from "./MockupIcons.styled";

export const CloseBurgerIcon = () => (
  <div>
<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5L11 1L21 5M21 11L11 7L1 11M1 17L11 13L21 17" stroke="#455A64" stroke-width="1.5" stroke-linecap="round"/>
</svg>
  </div>
);

export const DropdownArrowIcon = () => (
    <DropdownIconBox>
<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L7.5 7.5L14 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
    </DropdownIconBox>
  );

  export const MoreArrowIcon = () => (
    <MockupIconBox>
<svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.354 4.35357C21.549 4.15827 21.549 3.84167 21.354 3.64637L18.172 0.464468C17.976 0.269168 17.66 0.269168 17.464 0.464468C17.269 0.659668 17.269 0.976268 17.464 1.17157L20.293 3.99997L17.464 6.82837C17.269 7.02367 17.269 7.34027 17.464 7.53547C17.66 7.73077 17.976 7.73077 18.172 7.53547L21.354 4.35357ZM0 4.49997H21V3.49997H0V4.49997Z" fill="white"/>
</svg>
    </MockupIconBox>
  );

  export const CopySupportIcon = () => (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginLeft:'7px'}}>
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_68_4619)">
<path d="M13.4583 10.6084V12.9834C13.4583 16.15 12.1916 17.4167 9.02492 17.4167H6.01659C2.84992 17.4167 1.58325 16.15 1.58325 12.9834V9.97502C1.58325 6.80835 2.84992 5.54169 6.01659 5.54169H8.39159" stroke="#455A64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.18342 1.58331H12.3501M5.54175 3.95831C5.54175 2.64415 6.60258 1.58331 7.91675 1.58331H9.99091M17.4167 6.33331V11.2337C17.4167 12.4608 16.4192 13.4583 15.1922 13.4583M17.4167 6.33331H15.0417C13.2605 6.33331 12.6667 5.73956 12.6667 3.95831V1.58331L17.4167 6.33331ZM13.4584 10.6083H10.9251C9.02508 10.6083 8.39175 9.97498 8.39175 8.07498V5.54165L13.4584 10.6083Z" stroke="#455A64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_68_4619">
<rect width="19" height="19" fill="white"/>
</clipPath>
</defs>
</svg>
    </div>
  );

  export const CristDeleteIcon = () => (
    <EditIconsBox style={{width:'10px'}}>
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.95294 1L15.9765 15M15.9765 1L1.95294 15" stroke="#455A64" stroke-width="2" stroke-linecap="round"/>
</svg>
    </EditIconsBox>
  );

  export const PencilEditIcon = () => (
    <EditIconsBox>
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9552 4.41361C11.3731 5.90548 12.168 7.26464 13.2635 8.36016C14.359 9.45566 15.7182 10.2507 17.2101 10.6684M12.3794 2.98927L2.39091 12.9777C2.00608 13.3627 1.64033 14.1133 1.56333 14.6521L1.02451 18.4627C0.832007 19.8484 1.79433 20.8107 3.17998 20.6182L6.99061 20.0794C7.52961 20.0024 8.28018 19.6368 8.665 19.2518L18.6535 9.26333C20.3664 7.55043 21.194 5.54894 18.6535 3.00852C16.113 0.448843 14.1115 1.25715 12.3794 2.98927Z" stroke="inherit" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </EditIconsBox>
  );

  export const StarButtonIcon = () => (
    <div style={{width:'14px', display: 'flex', justifyContent:'center', alignItems:'center', stroke:'#455A64', '&:hover': {stroke:'white'}}}>
<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7682 1.98608L13.6502 5.43712C14.0278 6.1294 14.6965 6.61529 15.4716 6.76043L19.3354 7.48397C20.0162 7.61149 20.286 8.44187 19.8102 8.94517L17.1096 11.8015C16.5678 12.3745 16.3125 13.1607 16.414 13.9426L16.9197 17.8409C17.0088 18.5278 16.3025 19.0409 15.6767 18.7439L12.1256 17.0583C11.4133 16.7201 10.5866 16.7201 9.8744 17.0583L6.32321 18.7439C5.69751 19.0409 4.99114 18.5278 5.08027 17.8409L5.58609 13.9426C5.68756 13.1607 5.43211 12.3745 4.89038 11.8015L2.18985 8.94517C1.71402 8.44187 1.98384 7.61149 2.66462 7.48397L6.52834 6.76043C7.30342 6.61529 7.97215 6.1294 8.3498 5.43712L10.2317 1.98608C10.5634 1.37801 11.4366 1.37801 11.7682 1.98608Z" stroke="inherit" stroke-width="2"/>
</svg>
    </div>
  );

