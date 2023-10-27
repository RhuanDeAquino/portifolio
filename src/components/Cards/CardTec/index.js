import React from 'react'
import styled from 'styled-components'

const BoxCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px 40px 6px 40px;
  overflow: hidden;

.card {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.card .front-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .front-content img {
  opacity: 1;
  background-clip: text;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  width: 150px;
  height: 150px;
}

.card .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: ${(props) => (props.darkMode ? 'var(--red-miles)' : 'var(--blue-peter)')};
  box-shadow: ${(props) => (props.darkMode ? '1px 0 10px var(--red-miles)' : '3px 0 10px var(--red-peter)')};
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  pointer-events: none;
  transform: translateX(-96%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .content .heading {
  font-size: 32px;
  font-weight: 700;
}

.card:hover .content {
  transform: translateY(0);
}

.card:hover .front-content {
  transform: translateX(-30%);
}

.card:hover .front-content p {
  opacity: 0;
}
`

const CardComponent = ({ Image, Title, Description, darkMode }) => {
  return (
    <BoxCard darkMode={darkMode}>
      <div className="card">
        <div className="front-content">
          <img src={Image} alt='aa' />
        </div>
        <div className="content">
          <p className="heading">{Title}</p>
          <p>{Description}</p>
        </div>
      </div>
    </BoxCard>
  )
}

export default CardComponent;