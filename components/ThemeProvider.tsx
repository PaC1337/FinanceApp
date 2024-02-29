// Define your theme colors and styles here
export const ThemeColors = {
    dark: '#000000',
    blue: '#0000FF',
    white: '#FFFFFF',
    gradient: ['#083899', '#0c0d0d'], // This is a sample gradient from dark blue to light grey
  };
  
  export const ThemeStyles = {
    screenContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: ThemeColors.dark,
    },
    sectionCard: {
      padding: 20,
      borderRadius: 8,
      marginVertical: 8,
      elevation: 5,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: ThemeColors.white,
      paddingVertical: 10,
    },
  };
  