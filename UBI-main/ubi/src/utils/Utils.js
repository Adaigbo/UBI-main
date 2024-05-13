import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Utils = {
  getAllMonths() {
    return ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  },

  scrollTo(y, delay = 1000) {
    setTimeout(function () {
      window.scroll(0, y);
    }, delay);
  },


  isLoggedIn() {
    let token = localStorage.getItem('ubi_token');
    if (token)
      return true;

    return false;
  },

  me() {
    if (this.isLoggedIn()) {
      let str = localStorage.getItem('ubi_user');
      let obj = JSON.parse(str);
      obj = obj ? obj : {};

      return obj;
    }

    return null;
  },


  Toast(type, message) {
    toast[type](
      <p className="mx-2 tx-16 d-flex align-items-center mb-0">
        {message}
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        theme: "colored",
      }
    );
  },


  Alert(icon, title, text) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      allowOutsideClick: false,
    });
  },


  sortMixedStringsArray(mixedArray) {
    return mixedArray.sort((a, b) => {
      // Convert numeric strings to numbers for comparison
      const numA = parseInt(a);
      const numB = parseInt(b);

      // Handle non-numeric strings
      if (isNaN(numA) && isNaN(numB)) {
        return a.localeCompare(b); // Sort non-numeric strings alphabetically
      } else if (isNaN(numA)) {
        return 1; // Non-numeric strings come after numbers
      } else if (isNaN(numB)) {
        return -1; // Non-numeric strings come before numbers
      } else {
        return numA - numB; // Sort numbers in ascending order
      }
    });
  },

  sortMixedObjectsArray(mixedArray, sortedProperty) {
    return mixedArray.sort((a, b) => {
      const valueA = parseInt(a[sortedProperty]);
      const valueB = parseInt(b[sortedProperty]);

      if (!isNaN(valueA) && !isNaN(valueB)) {
        return valueA - valueB; // Sort numeric values in ascending order
      } else if (!isNaN(valueA)) {
        return -1; // Numbers come before strings
      } else if (!isNaN(valueB)) {
        return 1; // Strings come after numbers
      } else {
        return a[sortedProperty].localeCompare(b[sortedProperty]); // Sort non-numeric strings alphabetically
      }
    });
  },

  formDataToJSON(formData) {
    const jsonObject = {};

    formData.forEach((value, key) => {
      // Check if the key already exists in the jsonObject
      if (jsonObject.hasOwnProperty(key)) {
        // If it's an array, push the value
        if (Array.isArray(jsonObject[key])) {
          jsonObject[key].push(value);
        } else {
          // If it's a single value, convert it to an array with the existing value and the new value
          jsonObject[key] = [jsonObject[key], value];
        }
      } else {
        // const cleanedKey = key.replace(/\[\]$/, '');
        // If it's a single value (not an array), directly set the value
        jsonObject[key] = value;
      }
    });

    return jsonObject;
  },


  can(task) {
    const me = this.me();

    if (this.isLoggedIn()) {
      return me.permissions.some(perm => perm.name === task);
    }

    return false;
  },

  capitalizeFLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  },

};

export default Utils;