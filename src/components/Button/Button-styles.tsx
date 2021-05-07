import styled from 'styled-components';

export const BtnHover = styled.span`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  width: 100%;
  padding-top: 100%;
  border-radius: 200px;
  transform: scale(0) translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  transition: transform .4s cubic-bezier(.25, .74, .22, .99), background-color .8s cubic-bezier(.25, .74, .22, .99), border-color .8s cubic-bezier(.25, .74, .22, .99);
`

export const BtnText = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  pointer-events: none;
  transform: translateZ(0);
`

export const Btn = styled.button<{isRounded?: boolean}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: color .8s cubic-bezier(.25, .74, .22, .99), 
              background-color .8s cubic-bezier(.25, .74, .22, .99), 
              border-color .8s cubic-bezier(.25, .74, .22, .99),
              box-shadow .4s cubic-bezier(.25, .74, .22, .99);
  user-select: none;
  overflow: hidden;
  transform: translate3d(0,0,0);
  height: auto;
  border-radius: ${
    (props) => props.isRounded ?
      '28px' :
      '2px'
  };
  border: 1px solid;

  &.is-disabled {
    pointer-events: none;
  }
  

  &:hover {
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
  }

  &:hover ${BtnHover} {
    transform: scale(1) translate3d(-50%, -50%, 0);
    width: 110%;
  }

  &.color {
    &--primary {
      color: white;
      background-color: #1ea7fd;
      border-color: #1ea7fd;

      &.is-disabled {
        color: white;
        background-color: #63bbf1;
        border-color: #63bbf1;
      }

      &.is-outline {
        color: #1ea7fd;
        background-color: white;
        border-color: #1ea7fd;

        &:hover {
          color: white;
        }
      }

      &:hover ${BtnHover} {
        background-color: #0d6efd;
        border-color: #0d6efd;
        color: white;
      }
    }

    &--success {
      color: white;
      background-color: #00c851;
      border-color: #00c851;

      &.is-disabled {
        color: white;
        background-color: #25ad5b;
        border-color: #25ad5b;
      }

      &.is-outline {
        color: #00c851;
        background-color: white;
        border-color: #00c851;

        &:hover {
          color: white;
        }
      }

      &:hover ${BtnHover} {
        color: white;
        background-color: #198754;
        border-color: #198754;
      }
    }

    &--warning {
      color: white;
      background-color: #fb3;
      border-color: #fb3;

      &.is-disabled {
        color: white;
        background-color: #966e20;
        border-color: #966e20;
      }

      &.is-outline {
        color: #fb3;
        background-color: white;
        border-color: #fb3;

        &:hover {
          color: white;
        }
      }

      &:hover ${BtnHover} {
        color: white;
        background-color: #f8a808;
        border-color: #f8a808;
      }
    }

    &--danger {
      color: white;
      background-color: #ff3547;
      border-color: #ff3547;

      &.is-disabled {
        color: white;
        background-color: #a31a25;
        border-color: #a31a25;
      }

      &.is-outline {
        color: #ff3547;
        background-color: white;
        border-color: #ff3547;

        &:hover {
          color: white;
        }
      }

      &:hover ${BtnHover} {
        color: white;
        background-color: #dc3545;
        border-color: #dc3545;
      }
    }

    &--info {
      color: white;
      background-color: #33b5e5;
      border-color: #33b5e5;

      &.is-disabled {
        color: white;
        background-color: #207291;
        border-color: #207291;
      }

      &.is-outline {
        color: #33b5e5;
        background-color: white;
        border-color: #33b5e5;

        &:hover {
          color: white;
        }
      }

      &:hover ${BtnHover} {
        color: white;
        background-color: #0dcaf0;
        border-color: #0dcaf0;
      }
    }
  }

  &.size {
    &--medium {
      height: 44px;
      padding: 0 24px;
      font-size: 16px;
      line-height: 1;
    }

    &--large {
      height: 54px;
      padding: 0 40px;
      font-size: 16px;
      line-height: 1;
    }

    &--small {
      height: 32px;
      padding: 0 24px;
      font-size: 14px;
      line-height: 1.16;
    }
  }
`