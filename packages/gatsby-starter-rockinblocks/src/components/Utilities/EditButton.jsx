import React from 'react';
import { useCMS } from 'tinacms';

export const EditButton = () => {
  const cms = useCMS();
  return (
   <button onClick={() => cms.toggle()}>
    {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  );
}

export default EditButton