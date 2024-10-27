import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { RootStackParamList } from "../../types";
import { StyleSheet } from "react-nativescript";

type DashboardProps = {
    route: RouteProp<RootStackParamList, "Dashboard">;
    navigation: FrameNavigationProp<RootStackParamList, "Dashboard">;
};

export function Dashboard({ navigation }: DashboardProps) {
    return (
        <scrollView className="bg-gray-100">
            <flexboxLayout className="p-4 flex-col">
                <label className="text-2xl font-bold mb-4">Dashboard</label>
                
                <gridLayout rows="auto, auto" columns="*, *" className="mb-4">
                    <flexboxLayout row="0" col="0" className="bg-white p-4 m-1 rounded-lg">
                        <label className="text-lg font-bold">Total Budget</label>
                        <label className="text-2xl text-green-600">$50,000</label>
                    </flexboxLayout>
                    
                    <flexboxLayout row="0" col="1" className="bg-white p-4 m-1 rounded-lg">
                        <label className="text-lg font-bold">Total Spent</label>
                        <label className="text-2xl text-blue-600">$23,450</label>
                    </flexboxLayout>
                    
                    <flexboxLayout row="1" col="0" className="bg-white p-4 m-1 rounded-lg">
                        <label className="text-lg font-bold">Pending</label>
                        <label className="text-2xl text-yellow-600">5</label>
                    </flexboxLayout>
                    
                    <flexboxLayout row="1" col="1" className="bg-white p-4 m-1 rounded-lg">
                        <label className="text-lg font-bold">Projects</label>
                        <label className="text-2xl text-purple-600">8</label>
                    </flexboxLayout>
                </gridLayout>

                <button 
                    className="bg-blue-600 text-white p-4 rounded-lg mb-2"
                    onTap={() => navigation.navigate("Projects")}
                >
                    View Projects
                </button>
                
                <button 
                    className="bg-green-600 text-white p-4 rounded-lg mb-2"
                    onTap={() => navigation.navigate("NewExpense", { projectId: "" })}
                >
                    New Expense
                </button>
                
                <button 
                    className="bg-purple-600 text-white p-4 rounded-lg"
                    onTap={() => navigation.navigate("Reports")}
                >
                    Generate Reports
                </button>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 16,
    },
});