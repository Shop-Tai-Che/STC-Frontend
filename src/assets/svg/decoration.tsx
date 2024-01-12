import React from "react";

const DecorationSvg = (props) => {
  return (
    <svg
      width={props.iconWidth}
      height={props.iconHeight}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.27913 2.13062C3.11403 2.29641 3.10403 2.3768 3.07901 3.43183C3.04899 4.58231 2.93393 4.94906 2.24353 6.11964C1.96837 6.58687 1.93835 6.75769 2.09344 7.00888C2.22351 7.22994 2.42863 7.27515 3.31915 7.27515C4.45981 7.27515 5.01514 7.43592 5.96569 8.04382C6.48099 8.3754 6.6811 8.43066 6.92625 8.31511C7.21641 8.17444 7.23643 8.09908 7.26144 7.04907C7.29646 5.77801 7.40152 5.41629 8.06191 4.31604C8.36708 3.81365 8.40711 3.62274 8.27203 3.36149C8.15696 3.13541 7.98686 3.10025 7.03631 3.08517C5.8206 3.06508 5.42537 2.9445 4.29972 2.25622C3.94952 2.04522 3.83945 2 3.64434 2C3.45423 2 3.37919 2.02512 3.27913 2.13062ZM4.56988 3.3414C5.26028 3.6981 5.87063 3.85384 6.76115 3.89403C7.08134 3.9091 7.34649 3.9292 7.34649 3.93422C7.34649 3.93925 7.24643 4.12011 7.12136 4.33614C6.68611 5.1048 6.44597 6.02921 6.44597 6.93352V7.38066L6.13579 7.19979C5.31531 6.72754 4.69495 6.53663 3.70437 6.46127C2.99896 6.40601 2.99396 6.40601 3.059 6.30051C3.60932 5.45648 3.89448 4.48183 3.89448 3.4469V2.9445L4.05958 3.05001C4.14463 3.11029 4.37977 3.24092 4.56988 3.3414Z"
        fill={props.svgColor ? props.svgColor : "black"}
      />
      <path
        d="M19.0683 3.25599C18.9482 3.30623 18.7531 3.42178 18.628 3.50719C18.0427 3.91413 17.4624 4.06987 16.5268 4.08494C15.7364 4.09499 15.5963 4.13518 15.4762 4.39643C15.3661 4.62753 15.4062 4.7682 15.7314 5.31079C16.2066 6.09452 16.3967 6.81797 16.3317 7.56152C16.2917 7.99358 16.3517 8.26487 16.5218 8.42564C16.7419 8.63162 17.0571 8.57133 17.6175 8.20961C18.2628 7.79262 18.7431 7.66702 19.6787 7.65195C20.5091 7.64693 20.6642 7.59166 20.7593 7.2852C20.8243 7.05912 20.7643 6.88328 20.4491 6.38089C20.0188 5.69261 19.8938 5.24045 19.8838 4.2859C19.8738 3.48709 19.8187 3.30623 19.5486 3.21077C19.3385 3.14044 19.3184 3.14044 19.0683 3.25599ZM19.0783 4.306C19.0433 4.42657 19.1333 5.21533 19.2284 5.59213C19.2734 5.75792 19.4035 6.08448 19.5186 6.3206C19.6336 6.55673 19.7337 6.76271 19.7437 6.77778C19.7487 6.79285 19.5486 6.823 19.2934 6.83807C18.7331 6.87324 18.0777 7.05912 17.5874 7.31032C17.3873 7.41582 17.2122 7.50625 17.1972 7.5163C17.1822 7.52133 17.1522 7.31534 17.1372 7.05912C17.1022 6.46127 16.9471 5.88352 16.6819 5.35098L16.4768 4.93399L17.0521 4.8737C17.6825 4.81341 18.1728 4.66772 18.7031 4.38638C19.0833 4.18542 19.1183 4.1804 19.0783 4.306Z"
        fill={props.svgColor ? props.svgColor : "black"}
      />
      <path
        d="M11.7641 5.87347C11.5189 5.94381 11.2588 6.29046 10.8235 7.11941C9.82793 9.01344 8.82235 10.0082 6.90123 11.018C5.8206 11.5807 5.56546 11.8922 5.79059 12.3594C5.92566 12.6407 6.04573 12.7312 7.00629 13.2537C8.03189 13.8113 8.60222 14.2183 9.22258 14.8412C9.84794 15.4742 10.2682 16.062 10.8285 17.1121C11.2938 17.9812 11.5389 18.2977 11.7941 18.353C12.2143 18.4434 12.4895 18.1922 12.9497 17.318C13.6001 16.0721 14.0054 15.4994 14.7308 14.7809C15.3211 14.2032 15.9015 13.7912 16.892 13.2537C17.8526 12.7312 17.9727 12.6407 18.1077 12.3594C18.3379 11.8871 18.0777 11.5807 16.9521 10.9979C15.066 10.0082 14.0354 8.96823 13.0248 7.02898C12.4895 6.00409 12.2143 5.74787 11.7641 5.87347ZM12.3244 7.43592C13.425 9.51584 14.5757 10.6713 16.5919 11.7163C16.9571 11.9072 17.2472 12.0831 17.2372 12.1132C17.2272 12.1434 16.877 12.3493 16.4618 12.5704C15.4162 13.1281 14.8909 13.5149 14.1254 14.2836C13.42 14.9869 12.9447 15.6199 12.5695 16.3434C12.2393 16.9865 11.9842 17.4235 11.9442 17.4235C11.9241 17.4235 11.724 17.0769 11.4989 16.6549C10.9386 15.5998 10.5383 15.0522 9.7729 14.2836C9.01246 13.5149 8.48715 13.1331 7.43654 12.5704C7.0163 12.3443 6.66609 12.1383 6.66109 12.1132C6.65109 12.0831 6.87121 11.9424 7.15638 11.7917C8.5772 11.0632 9.46772 10.385 10.2582 9.43546C10.7585 8.8376 11.0787 8.34526 11.5489 7.46104C11.754 7.08424 11.9342 6.77276 11.9492 6.77276C11.9642 6.77276 12.1343 7.06917 12.3244 7.43592Z"
        fill={props.svgColor ? props.svgColor : "black"}
      />
      <path
        d="M20.0188 15.7154C19.8988 15.7656 19.7037 15.8812 19.5786 15.9666C19.2684 16.1826 18.588 16.4991 18.2278 16.5996C18.0227 16.6549 17.6225 16.6951 16.9771 16.7152C15.9165 16.7503 15.8064 16.7805 15.6763 17.092C15.5863 17.313 15.6413 17.514 15.9115 17.931C16.5418 18.9106 16.7069 19.4633 16.7369 20.6891C16.7469 21.1714 16.782 21.6336 16.812 21.709C16.9571 22.0858 17.3173 22.0958 17.9026 21.7441C19.0483 21.0609 19.4435 20.9403 20.7443 20.9001L21.7148 20.865L21.8649 20.6941C22 20.5434 22.015 20.4982 21.99 20.3023C21.975 20.1716 21.8999 19.9707 21.7999 19.82C21.0545 18.6343 20.9044 18.142 20.9044 16.8609C20.9044 16.0168 20.8543 15.8209 20.6092 15.6953C20.4141 15.5898 20.274 15.5948 20.0188 15.7154ZM20.1039 17.1573C20.1039 18.0716 20.349 18.9659 20.8043 19.7295L21.0044 20.0611L20.3891 20.0963C19.4085 20.1566 18.563 20.4178 17.7976 20.8901L17.5674 21.0307L17.5374 20.4228C17.4874 19.3527 17.2222 18.4886 16.7019 17.6948L16.6019 17.5391L17.3123 17.5089C17.8126 17.4939 18.1478 17.4537 18.4229 17.3783C18.8081 17.2778 19.7287 16.8609 19.9288 16.7051C19.9838 16.6599 20.0439 16.6197 20.0689 16.6197C20.0889 16.6197 20.1039 16.8609 20.1039 17.1573Z"
        fill={props.svgColor ? props.svgColor : "black"}
      />
      <path
        d="M5.36034 16.0922C5.13521 16.1876 5.06016 16.3333 4.94509 16.8759C4.81002 17.4989 4.76499 17.6345 4.54987 18.0515C4.4398 18.2726 4.22468 18.559 3.96453 18.8302C3.44923 19.3728 3.39419 19.4633 3.39419 19.7094C3.39419 20.046 3.5843 20.1767 4.24469 20.3123C5.1252 20.4932 5.61048 20.7544 6.30088 21.4226C6.78616 21.8898 6.96627 21.9652 7.24143 21.8245C7.46156 21.709 7.52659 21.5834 7.64166 21.0106C7.81676 20.1365 8.07191 19.6291 8.65225 19.0362C9.20757 18.4635 9.31263 18.1872 9.0925 17.9058C8.98744 17.7702 8.78733 17.6999 8.09192 17.5491C7.66668 17.4587 7.09134 17.2025 6.77616 16.9613C6.66109 16.8759 6.41595 16.6499 6.22084 16.464C5.92066 16.1676 5.68052 16.0118 5.55545 16.0168C5.53544 16.0219 5.45039 16.052 5.36034 16.0922ZM6.97127 18.0063C7.22142 18.1269 7.57162 18.2575 7.75673 18.3027L8.08692 18.3881L7.77674 18.77C7.32648 19.3326 7.0263 19.9657 6.87622 20.6539L6.8412 20.7946L6.58105 20.5736C5.95568 20.046 5.32532 19.7295 4.57988 19.5637L4.4398 19.5286L4.69495 19.2422C5.14521 18.7448 5.51042 18.0365 5.6455 17.4135L5.71054 17.1322L6.11577 17.4637C6.35091 17.6546 6.70612 17.8807 6.97127 18.0063Z"
        fill={props.svgColor ? props.svgColor : "black"}
      />
    </svg>
  );
};

export default DecorationSvg;