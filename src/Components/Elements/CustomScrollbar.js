// // CustomScroll.js
// import React from 'react';
// import { Scrollbars } from 'react-custom-scrollbars'; // Use react-custom-scrollbars-2 for React 18
// import { throttle } from 'lodash';

// const CustomScroll = ({ children }) => {
//     // Throttle scroll events to improve performance
//     const handleScroll = throttle(() => {
//         // Handle scroll event, if necessary
//     }, 100);

//     return (
//         <Scrollbars
//             onScrollFrame={handleScroll}
//             autoHide
//             autoHeight
//             autoHeightMin={0}
//             autoHeightMax="100vh"
//             renderThumbHorizontal={({ style, ...props }) =>
//                 <div style={{ ...style, backgroundColor: '#ccc' }} {...props} />
//             }
//             renderThumbVertical={({ style, ...props }) =>
//                 <div style={{ ...style, backgroundColor: '#ccc', borderRadius: '10px' }} {...props} />
//             }
//         >
//             {children}
//         </Scrollbars>
//     );
// };

// export default CustomScroll;
