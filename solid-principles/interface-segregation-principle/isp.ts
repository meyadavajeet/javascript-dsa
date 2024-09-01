// interface segregation principle

// interface DocumentManager {
//   opnenDocument(): void;
//   closeDocumet(): void;
//   saveDocument(): void;
//   scanDocument(): void;
// }

// class BasicEditor implements DocumentManager {
//   opnenDocument(): void {
//     console.log("opnenDocument.");
//   }
//   closeDocumet(): void {
//     console.log("closeDocumetd.");
//   }
//   saveDocument(): void {
//     console.log("saveDocument.");
//   }

// here we don't need scanDocument in basicEditor but because of single interface we have to implement the scanDocument , which violets the principle of interface segregation
// scanDocument(): void {
//  console.log("Not doing anything.");
// }

// }


// we can re-write the whole code 

interface DocumentOper {
  openDocument(): void
}

interface DocumentCloser {
  closeDocument(): void;
}

interface DocumentSaver {
  saveDocument(): void;
}

interface DocumentScaner {
  scanDocument(): void;
}

class BasicEditor implements DocumentOper, DocumentCloser, DocumentSaver {
  openDocument(): void {
    console.log("opnenDocument.");
  }
  closeDocument(): void {
    console.log("closeDocumetd.");
  }
  saveDocument(): void {
    console.log("saveDocument.");
  }
}

class AdvanceEditor implements DocumentOper, DocumentCloser, DocumentSaver, DocumentScaner {
  openDocument(): void {
    console.log("open Document.");
  }
  closeDocument(): void {
    console.log("close Document.");
  }
  saveDocument(): void {
    console.log("save Document.");
  }
  scanDocument(): void {
    console.log("scan Document.");
  }

}