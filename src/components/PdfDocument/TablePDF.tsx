import React from 'react';

import { Path, StyleSheet, Svg, Text, View } from '@react-pdf/renderer';
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

const currectSvg = (
  <Svg width={30} height={20}>
    <Path
      d='M18.2999 6.3L9.09995 16.4L6.79995 13.4C6.49995 13 5.79995 12.9 5.39995 13.2C4.99995 13.5 4.89995 14.2 5.19995 14.6L8.19995 18.6C8.39995 18.8 8.69995 19 8.99995 19C9.29995 19 9.49995 18.9 9.69995 18.7L19.6999 7.7C20.0999 7.3 19.9999 6.7 19.5999 6.3C19.2999 5.9 18.5999 5.9 18.2999 6.3Z'
      fill='#4BBD6B'
    />
  </Svg>
);

const uncurrectAnswer = (
  <Svg width={30} height={20}>
    <Path
      d='M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z'
      fill='#EF4444'
    />
  </Svg>
);

const TablePDF = <T, K extends keyof T>({
  tableHeader,
  tableData,
}: Props<T, K>) => {
  const data = tableData.map((item: any) => {
    if (item.isCorrectAnswer) {
      return {
        ...item,
        svgComponent: currectSvg,
      };
    }

    return {
      ...item,
      svgComponent: uncurrectAnswer,
    };
  });

  return (
    <View>
      <View style={styles.tableRow}>
        {tableHeader.map(({ name }) => (
          <View key={name} style={styles.tableCell}>
            <Text style={styles.title}>{name}</Text>
          </View>
        ))}
      </View>
      {data.map((item: any) => (
        <View key={item} style={styles.tableRow}>
          {tableHeader.map(({ field }, index) => (
            <View key={field as string} style={styles.tableCell}>
              {field === 'index' && (
                <Text style={styles.text}>{index + 1}</Text>
              )}
              {field === 'svgComponent' && item[field]}

              <Text style={styles.text}>{item[field]}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TablePDF;
