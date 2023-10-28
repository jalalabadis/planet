import React from 'react';
import { IconProps } from '../../../../../src/features/common/types/common';

function GlobeIcon({ color = '#000' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color}
        d="M19.812 8.065h-2.735a.625.625 0 00-.625.625v.279a.625.625 0 01-.346.559l-.622.31a.625.625 0 01-.626-.04l-.733-.488a.626.626 0 00-.544-.073l-.107.035a.623.623 0 00-.323.94l.534.8a.624.624 0 00.52.279h.33a.625.625 0 01.626.625v.457a.626.626 0 01-.125.375l-.756 1.008a.628.628 0 00-.114.26l-.174.92a.626.626 0 01-.192.344c-.382.35-.72.745-1.008 1.176l-.524.788a1.12 1.12 0 01-1.932-.12A3.178 3.178 0 0110 15.7v-1.205a.625.625 0 00-.625-.625H8.331a2.203 2.203 0 01-2.202-2.203v-.567A2.204 2.204 0 017.01 9.34l1.112-.834c.381-.286.845-.44 1.322-.44h.035c.342 0 .68.08.986.232l.593.297a.625.625 0 00.477.034l1.908-.636a.625.625 0 00-.198-1.218h-.407a.625.625 0 01-.443-.183l-.28-.279a.625.625 0 00-.443-.183H8.043a.625.625 0 01-.624-.625v-.177a.626.626 0 01.474-.605l.582-.146a.626.626 0 00.369-.26l.326-.488a.624.624 0 01.52-.28h.976a.625.625 0 00.624-.625V.083A9.998 9.998 0 000 10c0 5.524 4.476 10 10 10a9.998 9.998 0 009.812-11.935z"
        opacity="0.4"
      ></path>
      <path
        fill={color}
        d="M17.076 8.065a.625.625 0 00-.625.625v.28a.624.624 0 01-.345.558l-.622.311a.624.624 0 01-.627-.04l-.732-.489a.626.626 0 00-.544-.073l-.107.036a.623.623 0 00-.323.939l.534.8a.624.624 0 00.52.28h.33a.625.625 0 01.626.624v.457a.626.626 0 01-.125.375l-.756 1.008a.628.628 0 00-.114.26l-.174.92a.626.626 0 01-.192.345c-.382.35-.72.744-1.008 1.175l-.524.789a1.12 1.12 0 01-1.932-.121A3.178 3.178 0 0110 15.702v-1.206a.625.625 0 00-.625-.625H8.33a2.203 2.203 0 01-2.202-2.203v-.566a2.203 2.203 0 01.881-1.763l1.112-.834c.381-.286.845-.44 1.321-.44h.036c.342 0 .68.08.985.233l.594.296a.625.625 0 00.477.034l1.908-.636a.625.625 0 00-.198-1.217h-.407a.625.625 0 01-.443-.184l-.28-.279a.625.625 0 00-.443-.183H8.043a.625.625 0 01-.624-.625v-.177a.626.626 0 01.474-.605l.582-.145a.626.626 0 00.369-.26l.326-.488a.624.624 0 01.52-.28h.976a.625.625 0 00.624-.626V.083a10.005 10.005 0 018.522 7.982h-2.736z"
      ></path>
    </svg>
  );
}

export default GlobeIcon;