import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { RootStackParamList } from "../../types";
import { StyleSheet } from "react-nativescript";

type NewExpenseProps = {
    route: RouteProp<RootStackParamList, "NewExpense">;
    navigation: FrameNavigationProp<RootStackParamList, "NewExpense">;
};

export function NewExpense({ navigation, route }: NewExpenseProps) {
    const [amount, setAmount] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("");

    const handleSubmit = () => {
        // Handle expense submission
        navigation.goBack();
    };

    return (
        <scrollView className="bg-gray-100">
            <flexboxLayout className="p-4 flex-col">
                <label className="text-2xl font-bold mb-4">New Expense</label>

                <label className="text-gray-700 mb-1">Amount</label>
                <textField 
                    className="bg-white p-4 rounded-lg mb-4"
                    keyboardType="number"
                    text={amount}
                    onTextChange={(e) => setAmount(e.value)}
                />

                <label className="text-gray-700 mb-1">Category</label>
                <textField 
                    className="bg-white p-4 rounded-lg mb-4"
                    text={category}
                    onTextChange={(e) => setCategory(e.value)}
                />

                <label className="text-gray-700 mb-1">Description</label>
                <textView 
                    className="bg-white p-4 rounded-lg mb-4 h-32"
                    text={description}
                    onTextChange={(e) => setDescription(e.value)}
                />

                <button 
                    className="bg-blue-600 text-white p-4 rounded-lg mb-2"
                    onTap={handleSubmit}
                >
                    Submit Expense
                </button>

                <button 
                    className="bg-gray-600 text-white p-4 rounded-lg"
                    onTap={() => navigation.goBack()}
                >
                    Cancel
                </button>
            </flexboxLayout>
        </scrollView>
    );
}