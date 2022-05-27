import React from 'react';
import { Table } from 'react-bootstrap';
import './Invoice.css';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Invoice = () => {
    return (
        <>
            <Document>
                <Page>
                    <View className="container">
                        <View className="text-center">
                            <Text>Invoice</Text>
                            <Text>ThumbStack Restaurant</Text>
                            <Text>Pabna, Dhaka, Bangladesh</Text>
                            <Text><strong>Mobile no:</strong> +880 1822 77 35 41</Text>
                        </View>
                        {/* <div className="d-flex justify-content-around">
                            <p>Invoice No:<strong>10</strong></p>
                            <p>Date : </p>
                        </div>
                        <div>
                            <Table bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item Name</th>
                                        <th>Qty.</th>
                                        <th>Rate</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>$100</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>$100</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="text-end pe-3">Sub-Total :</td>
                                        <td>$100</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="text-end pe-3">Tips (10%) :</td>
                                        <td>$100</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="text-end pe-3">Total :</td>
                                        <td>$100</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="text-center my-5">
                                <h4>Thank you, visit again</h4>
                            </div>
                        </div> */}
                    </View>
                </Page>
            </Document>
        </>
    );
};

export default Invoice;