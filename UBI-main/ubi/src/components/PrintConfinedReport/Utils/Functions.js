const Functions = {

    getStructurecriteriaByLetter(structure, letter) {
        var res = structure.confined_structure_criterias.find((obj) => obj.criteria == letter);
        res = res ? res.data : false;
        return res;
    },

    isRestrictedAccess(structure) {
        if (this.getStructurecriteriaByLetter(structure, 'A') !== false && this.getStructurecriteriaByLetter(structure, 'B') !== false &&
            (this.getStructurecriteriaByLetter(structure, 'C') !== false || this.getStructurecriteriaByLetter(structure, 'D') !== false || this.getStructurecriteriaByLetter(structure, 'E') !== false || this.getStructurecriteriaByLetter(structure, 'F') !== false)) {
            return false; // Confined Space Area
        }

        return true; // Restricted Access Area
    },

    /* TASKS Functions */
    getHazardTextByCriteriaLetter(confined_task_hazards, letter, number) {
        var res = confined_task_hazards.find((obj) => obj.criteria == letter);
        res = res ? res.data : false;

        if (letter === 'D') {
            const jsonData = JSON.parse(res);
            res = jsonData['d' + number] ? jsonData['d' + number] : false;
        }

        return res;
    },

    getLevLocDet(confinedStructureImage) {
        var arr = [];
        if (confinedStructureImage.level) arr.push(confinedStructureImage.level);
        if (confinedStructureImage.location) arr.push("(" + confinedStructureImage.location + ")");
        if (confinedStructureImage.detail) arr.push(confinedStructureImage.detail);

        arr = arr.join(' - ');
        return arr ? ' - ' + arr : ''
    },

};

export default Functions;