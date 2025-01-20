import { TextInputProps } from "react-native";

export declare interface InputFieldProps extends TextInputProps {
    label: string;
    rightIcon?: any;
    leftIcon?:any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
 
}
