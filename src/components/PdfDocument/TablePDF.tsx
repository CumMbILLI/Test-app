import React, { ReactNode } from 'react';

import { StyleSheet, Svg, Text, View } from '@react-pdf/renderer';
import { TableHeaderProps } from 'components/Table/Table';

interface Props<T, K extends keyof T> {
  tableHeader: TableHeaderProps<K>[];
  tableData: Array<T>;
}

const styles = StyleSheet.create({
  tableRow: {
    borderLeft: 1,
    borderTop: 1,
    borderBottom: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableCell: {
    width: `100%`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
});

const TablePDF = <T, K extends keyof T>({
  tableHeader,
  tableData,
}: Props<T, K>) => {
  return (
    <View>
      <View style={styles.tableRow}>
        {tableHeader.map(({ name }) => (
          <View key={name} style={styles.tableCell}>
            <Text style={styles.title}>{name}</Text>
          </View>
        ))}
      </View>
      {tableData.map((item) => (
        <View key={`${item}`} style={styles.tableRow}>
          {tableHeader.map(({ field }, index) => (
            <View key={field as string} style={styles.tableCell}>
              {field === 'index' && (
                <Text style={styles.text}>{index + 1}</Text>
              )}
              {field === 'svgComponent' && (
                <Svg width={30} height={20}>
                  {item[field] as ReactNode}
                </Svg>
              )}

              <Text style={styles.text}>{`${item[field]}`}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TablePDF;
