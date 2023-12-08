// AdminControl.js
import React, { useState } from 'react';
import styled from 'styled-components';

const AdminControlWrapper = styled.div`
  padding: 20px;
`;

const ControlTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ControlSection = styled.div`
  margin-bottom: 20px;
`;

const ControlLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const ControlCheckbox = styled.input`
  margin-right: 5px;
`;

const AdminControl = ({ admin, onUpdateAdmin }) => {
  const [stopRegistrations, setStopRegistrations] = useState(false);
  const [denyAccess, setDenyAccess] = useState(false);
  // Add more control states for other authorities

  const handleUpdate = () => {
    const updatedAdmin = {
      ...admin,
      authorities: {
        stopRegistrations,
        denyAccess,
        // Add more authorities here
      },
    };

    onUpdateAdmin(updatedAdmin);
  };

  return (
    <AdminControlWrapper>
      <ControlTitle>Admin Control</ControlTitle>

      <ControlSection>
        <ControlLabel>
          <ControlCheckbox
            type="checkbox"
            checked={stopRegistrations}
            onChange={() => setStopRegistrations(!stopRegistrations)}
          />
          Stop New Registrations
        </ControlLabel>
      </ControlSection>

      <ControlSection>
        <ControlLabel>
          <ControlCheckbox
            type="checkbox"
            checked={denyAccess}
            onChange={() => setDenyAccess(!denyAccess)}
          />
          Deny Access
        </ControlLabel>
      </ControlSection>

      {/* Add more sections for other authorities */}

      <button onClick={handleUpdate}>Update</button>
    </AdminControlWrapper>
  );
};

export default AdminControl;
