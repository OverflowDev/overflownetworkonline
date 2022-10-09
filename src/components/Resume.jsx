import { Worker, Viewer  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import Adeyemi from '../assets/adeyemi.pdf'


function Resume() {

  return (
    <div className='overflow-hidden'>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <div
                style={{
                    height: '50%',
                }}
            >
                <Viewer fileUrl={Adeyemi} />
            </div>
        </Worker>
    </div>
  )
}

export default Resume