import React from 'react';
import {
  StyledNav,
  StyledContainer,
  StyledUl,
  StyledLi,
  StyledButton,
  StyledHeader,
  StyledWaterDose,
  StyledCalories
} from './HealthBar.styled';
import { motion, useCycle } from 'framer-motion';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 110px 20px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(20px at 110px 20px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#FFF'
    strokeLinecap='round'
    {...props}
  />
);

export default function HealthBar({ healthBar, getTotalCalories, getDate }) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <StyledNav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <StyledContainer variants={sidebar}>
          <StyledHeader />
          <StyledUl variants={variantsUl}>
            {healthBar.map((healthBarList, i) => (
              <StyledLi
                key={i}
                variants={variantsLi}
                whileHover={{ scale: 1.1 }}
              >
                <div>
                  <h3 lang='en'>{getDate(i)}</h3>
                  <div>
                    <StyledWaterDose />
                    <span>{healthBarList.waterDose || 0}ml</span>
                  </div>
                  <div>
                    <StyledCalories />
                    <span>{getTotalCalories(healthBarList.meals)}kcal</span>
                  </div>
                </div>
              </StyledLi>
            ))}
          </StyledUl>
        </StyledContainer>

        <StyledButton onClick={() => toggleOpen()}>
          <svg width='15' height='15' viewBox='0 0 20 20'>
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' }
              }}
            />
            <Path
              d='M 2 9.423 L 20 9.423'
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' }
              }}
            />
          </svg>
        </StyledButton>
      </StyledNav>
    </>
  );
}
