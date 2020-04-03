import React from 'react';
import { CustomButtonContaienr } from './custom-button.styles'

const CustomButton = (props) => (
    <CustomButtonContaienr {...props}>
        { props.children }
    </CustomButtonContaienr>
)

export default CustomButton;